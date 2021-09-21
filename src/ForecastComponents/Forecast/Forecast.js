import React from 'react';
import PropTypes from 'prop-types';

import CurrentDay from '../CurrentDay/CurrentDay';
import CurrentDayDescription from '../CurrentDayDescription/CurrentDayDescription';
import UpcomingForecast from '../UpcomingForecast/UpcomingForecast';

const Forecast = ({ forecast }) => {
    return (
        <div className="forecast-container">
            <div className="current-card">
                <CurrentDay {...forecast.currentDay} />
            </div>
            <div className="forecast-card">
                <CurrentDayDescription forecast={forecast.currentDayDetails} />
                <UpcomingForecast days={forecast.upcomingDays} />
            </div>
        </div>
    )
}
Forecast.propTypes = {
    forecast: PropTypes.shape({
        currentDay: PropTypes.object,
        currentDayDetails: PropTypes.array,
        upcomingDays: PropTypes.array,
    }),
};

export default Forecast;
