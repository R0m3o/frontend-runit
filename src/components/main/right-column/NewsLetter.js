import React, { useState } from 'react';
import axios from 'axios';
import Letter from '../../../images/newsletter.png';

function NewsLetter() {
    const [ subscriber, setSubscriber ] = useState({});
    
    const submitNewSubscriber = e => {
        e.preventDefault();

        axios.post('http://localhost:5021/nyhedsbrevtilmelding', subscriber)
            .then(res => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return(
        <div id="NewsLetter">
            <form onSubmit={submitNewSubscriber}>
                <img src={Letter} alt="letter" className="mx-auto d-block"/>

                <input onChange={(e) => setSubscriber({...subscriber, email: e.target.value})} type="email" className="form-control" placeholder="Din Email"/>
                <button type="submit" className="form-control">Tilmeld</button>
            </form>
        </div>
    )
}

export default NewsLetter