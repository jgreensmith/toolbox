import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            go to
            <Link to="/todos">
                <button>todo</button>
            </Link>
        </div>
        
    )
}

export default Home;
