import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {LoginContext} from '../main/content/admin/loginContext';
import axios from 'axios';

function Search() {
    const { loggedIn, onLogout } = useContext(LoginContext)
    const history = useHistory()

    const handleLogout = () => {
        
        axios.get('http://localhost:5021/login/logout')
                .then(data => {
                    onLogout()
                    history.push('/')
            });
    }


    let logInLogout;

    if (loggedIn) {
        logInLogout= (
            <button onClick={handleLogout}>Log ud</button> 
        )
    } else {
        logInLogout= (
            <Link className="nav-link" to='/login'>Log ind</Link>     
        )
    }

    return(
        <div className="offset-3 col-3">
            <ol className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to='/advancedsearch'>Advanceret søg</Link>
                    {logInLogout}
                </li>
            </ol>
        </div>
    )
}

export default Search

