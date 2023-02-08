import React from 'react';
import { Link } from 'react-router-dom';

const NavBarLogo = () => {
    return (
        <>
            <Link className="navbar-brand" to='/'>
                <img className="logo" src="https://machineon.netlify.app/assets/Logo.webp" alt="Logo" />
            </Link>
        </>
    );
}

export default NavBarLogo;
