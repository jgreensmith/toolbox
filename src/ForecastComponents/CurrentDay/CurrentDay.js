import React from 'react';
import PropTypes from 'prop-types';

import './CurrentDay.scss';

const CurrentDay = ({ weekday, date, location, temperature, weatherIcon, weatherDescription }) => {
    return (
        <div className="current-container">
            <div>
                <h2>{weekday}</h2>
                <p>{date}</p>
                <p>{location}</p>
            </div>
            
            <div>
                <img src={weatherIcon} alt="weather icon" />
                <div className="temp" >
                    <h2>{temperature}°C</h2>
                    <h5>{weatherDescription}</h5>
                </div> 
            </div>
            

        </div>
    )
};

CurrentDay.propTypes = {
    weekday: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    weatherIcon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    weatherDescription: PropTypes.string.isRequired,
}

export default CurrentDay;
