import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return(
        <nav className="col-3 navbar navbar-expand-sm">
            <ol className="navbar-nav">
                <li className="nav-item">
                    <Link to='/events' className="nav-link">EVENTS</Link>
                </li>
                <li className="nav-item">
                    <Link to='/sponsores' className="nav-link">SPONSORE</Link>
                </li>
                <li className="nav-item">
                    <Link to='/about' className="nav-link">OM RUNIT</Link>
                </li>
                <li className="nav-item">
                    <Link to='/contact' className="nav-link">KONTAKT</Link>
                </li>
            </ol>
        </nav>
    )
}

export default Menu