import React from 'react';
import PropTypes from 'prop-types';

import './UpcomingForecastDay.scss';

const UpcomingForecastDay = ({ weekday, temperature, imgUrl }) => {
    return (
        <li>
            <a className="tag" href="https://www.metaweather.com/" target="_blank" rel="noreferrer" >
                <img src={`https://www.metaweather.com/static/img/weather/${imgUrl}.svg`} alt="" />
                <div>
                    <p>{weekday}</p>
                    <p>{temperature}°C</p>
                </div>
            </a>
        </li>
    )
}

UpcomingForecastDay.propTypes = {
    weekday: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
};

export default UpcomingForecastDay;
