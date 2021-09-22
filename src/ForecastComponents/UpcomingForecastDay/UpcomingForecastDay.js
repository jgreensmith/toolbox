import React from 'react';
import PropTypes from 'prop-types';

import './UpcomingForecastDay.scss';

const UpcomingForecastDay = ({ weekday, temperature, imgUrl }) => {
    return (
        <li>
            <img className="mb-2" width="30" src={`https://www.metaweather.com/static/img/weather/${imgUrl}.svg`} alt="" />
            <span>{weekday}</span>
            <span>{temperature}</span>
        </li>
    )
}

UpcomingForecastDay.propTypes = {
    weekday: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
};

export default UpcomingForecastDay;
