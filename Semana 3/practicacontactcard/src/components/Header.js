import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
        </nav>
    );
}

export default Header;