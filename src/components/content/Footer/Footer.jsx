import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark footer">
                <div className="container-fluid">
                    <div className="navbar-collapse navbar-dark justify-content-start">
                        <div>© 2023 Machine On</div>
                    </div>
                    <div className="navbar-collapse navbar-dark justify-content-end">
                        <ul className="navbar-nav">
                            <li style={{ margin: "0 1rem" }}>
                                <Link to={'/myorders'} className="nav-link">
                                    Mis Ordenes
                                </Link>
                            </li>
                            <li style={{ margin: "0 1rem" }}>
                                <Link to={'/about'} className="nav-link">
                                    Sobre nosotros
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default memo(Footer);
