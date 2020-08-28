import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

const AuthDataProvider = props => {
    const [loggedIn, setLoggedin] = useState();

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
};

export default AuthDataProvider;