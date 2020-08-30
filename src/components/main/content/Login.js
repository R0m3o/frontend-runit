import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {LoginContext} from './admin/loginContext';

function Login() {
    const [logindata, setLogindata] = useState({});
    const history = useHistory();
    const { onLogin } = useContext(LoginContext)

    const userLoggingIn = e => {
        e.preventDefault();

        axios.post('http://localhost:5021/login/login', logindata)
            .then(res => {
                console.log(res.data);
                onLogin()   
                history.push('/admin')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <section className="col-10">
            <form onSubmit={userLoggingIn} className="col-5">
                <label htmlFor="UserName">Brugernavn:</label>
                <input className="form-control" id="UserName" onChange={(e) => setLogindata({...logindata, brugernavn: e.target.value })} type="text"/>
                <label htmlFor="Password">Password:</label>
                <input className="form-control" id="Password" onChange={(e) => setLogindata({...logindata, password: e.target.value })} type="password"/>
                <button type="submit">Log ind</button>
            </form>
        </section>
    )
}

export default Login;