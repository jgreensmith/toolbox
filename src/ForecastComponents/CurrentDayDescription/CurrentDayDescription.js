import React from 'react';
import PropTypes from 'prop-types';

import CurrentDayDescriptionItem from '../CurrentDayDescriptionItem/CurrentDayDescriptionItem';

import './CurrentDayDescription.scss'

const CurrentDayDescription = ({ forecast }) => {
    return (
        <div className="description-line">
            {forecast.map((item, index) => (
                <CurrentDayDescriptionItem {...item} key={index} />
            ))}
        </div>
    )
}

CurrentDayDescription.propTypes = {
    forecast: PropTypes.array,
};

export default CurrentDayDescription;
