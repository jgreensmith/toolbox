import React, { useContext, useState } from 'react';
import { ForecastContext } from '../../contexts/ForecastContext';

import './Form.scss';

const Form = () => {
    const [location, setLocation] = useState('');
    const { submitRequest } = useContext(ForecastContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!location || location === '') return;
        submitRequest(location);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                aria-label="location"
                type="text"
                className="input"
                placeholder="Search for Location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button type="submit" className="button">
                Search
            </button>
            
        </form>
    )
}

export default Form;
