import React from 'react';
import PropTypes from 'prop-types';

import './Error.scss';

const Error = ({ message }) => (
    <div className="error alert posistion-absolute">
        {message} 
    </div>
);

Error.propTypes = {
    message: PropTypes.string,
};

Error.defaultProps = {
    message: 'An error occurred',
};

export default Error;
