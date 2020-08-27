import React from 'react';
import { Link } from 'react-router-dom';

function Search() {
    return(
        <div className="offset-3 col-3">
            <ol className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to='/advancedsearch'>Advanceret søg</Link>
                    <Link className="nav-link" to='/login'>Log ind</Link>
                </li>
            </ol>
        </div>
    )
}

export default Search

