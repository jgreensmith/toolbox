import React, { useContext } from 'react';
import { ForecastContext } from '../../contexts/ForecastContext';
import Error from '../../ForecastComponents/Error/Error';
import Forecast from '../../ForecastComponents/Forecast/Forecast';
import Form from '../../ForecastComponents/Form/Form';
import Loader from '../../ForecastComponents/Loader/Loader';

import './ForecastPage.scss';

const ForecastPage = () => {
    const { error, loading, forecast } = useContext(ForecastContext);


    return (
        <>
            <h1 className="heading">
                <span className="light">Weather</span> Forecast
            </h1>
            
            <div className="weather-box">
                { !forecast ? 
                    <div>
                        { !loading && <Form /> }
                        { loading && <Loader /> }
                        { error && <Error /> }
                    </div>
                    
                : <> <Forecast forecast={forecast} /> </>}
            </div>
        </>
    )
}

export default ForecastPage;
