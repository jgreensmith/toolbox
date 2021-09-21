import React from 'react';
import PropTypes from 'prop-types';


const CurrentDay = ({ weekday, date, location, temperature, weatherIcon, weatherDescription }) => {
    return (
        <div className="current-container">
            <h2>{weekday}</h2>
            <p>{date}</p>
            <p>{location}</p>
            <div>
                <img src={weatherIcon} alt="weather icon" />
                <h3>{temperature}°C</h3>
                <h5>{weatherDescription}</h5>
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
