import React from 'react';
import UpcomingForecastDay from '../UpcomingForecastDay/UpcomingForecastDay';

import './UpcomingForecast.scss';

const UpcomingForecast = ({ days }) => {
    return (
        <ul>
            {days.map((day) => (
                <UpcomingForecastDay {...day} key={day.weekday} />
            ))}
        </ul>
    )
}

export default UpcomingForecast;
