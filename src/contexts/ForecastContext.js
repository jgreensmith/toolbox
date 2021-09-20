import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ForecastContext = createContext();

const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const ForecastContextProvider = (props) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    const submitRequest = async (location) => {
        const { data } = await axios(`${REQUEST_URL}/search`, { params: {query: location } })

        console.log(data[0]);
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
