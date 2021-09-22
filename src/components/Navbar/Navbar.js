import React from 'react';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';

import './Navbar.scss';

const Navbar = () => {
    return (
        <>
        <nav className="main-nav">
            <div className="brand-container">
                <Link to='/' className="home-link">
                    <div className="brand-title" >Toolbox</div>
                    <AppsIcon fontSize="large" className="nav-icon" />
                </Link>
            </div>
            
            
        </nav>
        </>
    )
}

export default Navbar;
