import React, { createContext, useState } from 'react';

export const ForecastContext = createContext();

const ForecastContextProvider = (props) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    const submitRequest = (location) => {

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
