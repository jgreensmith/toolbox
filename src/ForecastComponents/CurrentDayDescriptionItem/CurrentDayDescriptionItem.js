import React from 'react';
import PropTypes from 'prop-types';


const CurrentDayDescriptionItem = ({ name, value, unit }) => {
    return (
        <div>
            <p>{name}</p>
            <p>{value} {unit}</p>
        </div>
    )
}

CurrentDayDescriptionItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
};

export default CurrentDayDescriptionItem;
