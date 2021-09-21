import React, { createContext, useState } from 'react';
import axios from 'axios';

import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';

export const ForecastContext = createContext();

const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const ForecastContextProvider = (props) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    const getWoeid = async (location) => {

        const { data } = await axios(`${REQUEST_URL}/search`, { params: {query: location } });
    
        if (!data || data.length === 0) {
            setError('There is no such location');
            setLoading(false);
            return;
        }
        return data[0];
        //woeid is in index 0 of data
    }
    const getForecastData = async (woeid) => {
        const { data } = await axios(`${REQUEST_URL}/${woeid}`);

        if (!data || data.length === 0) {
            setError('Something went wrong');
            setLoading(false);
            return;
        }
        return data;
    }

    const gatherForecastData = data => {
        const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title);
        const currentDayDetails = getCurrentDayDetailedForecast(data.consolidated_weather[0]);
        const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather);

        setForecast({ currentDay, currentDayDetails, upcomingDays });
        setLoading(false);

        console.log({upcomingDays})
    };

    const submitRequest = async (location) => {
        setLoading(true);
        setError(false);

        const response = await getWoeid(location);
        if (!response?.woeid) return;

        const data = await getForecastData(response.woeid);
        if (!data) return;

        gatherForecastData(data);

    }

    return (
        <ForecastContext.Provider value={{
            error,
            loading,
            forecast,
            submitRequest,
        }} >
            {props.children}
        </ForecastContext.Provider>
    )
}

export default ForecastContextProvider;
