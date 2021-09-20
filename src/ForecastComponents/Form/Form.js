import React, { useState } from 'react';

import './Form.scss';

const Form = () => {
    const [location, setLocation] = useState('');

    return (
        <form>
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
