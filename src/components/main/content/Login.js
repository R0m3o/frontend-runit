import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [user, setUser] = useState({});
    const history = useHistory();

    const userLoggingIn = e => {
        e.preventDefault();

        axios.post('http://localhost:5021/login/login', user)
            .then(res => {
                console.log(res.data);   
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
                <input className="form-control" id="UserName" onChange={(e) => setUser({...user, brugernavn: e.target.value })} type="text"/>
                <label htmlFor="Password">Password:</label>
                <input className="form-control" id="Password" onChange={(e) => setUser({...user, password: e.target.value })} type="password"/>
                <button type="submit">Log ind</button>
            </form>
        </section>
    )
}

export default Login;