import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const LoginContext = createContext();

const AuthDataProvider = props => {
    const [loggedIn, setLoggedin] = useState();

    /* useEffect(() => {
        axios.get('http://localhost:5021/login/loggedin')
            .then(res => {
                const response = res.data;
                setLoggedin(response)
            })
    }, []) */
    

    const onLogout = () => {
        console.log("user logged off")
        setLoggedin(false)
    };

    const onLogin = (logindata) => {
        console.log("user has logged on", logindata)
        setLoggedin(true)
    }; 

    return (
        <LoginContext.Provider value={{ loggedIn, onLogin, onLogout }}>
            {props.children}
        </LoginContext.Provider>
    ); 

    /* return (
        <LoginContext.Provider value={{ loggedIn }}>
            {props.children}
        </LoginContext.Provider>
    ); */
};

export default AuthDataProvider;