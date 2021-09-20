import React, { useContext } from 'react';
import { ForecastContext } from '../../contexts/ForecastContext';
import Form from '../../ForecastComponents/Form/Form';

import './ForecastPage.scss';

const ForecastPage = () => {
    const { error, loading, forecast, submitRequest } = useContext(ForecastContext);

    return (
        <>
            <h1 className="heading">
                <span className="light">Weather</span> Forecast
            </h1>
            <div className="weather-box">
                { !error && <Form /> }
            </div>
        </>
    )
}

export default ForecastPage;
