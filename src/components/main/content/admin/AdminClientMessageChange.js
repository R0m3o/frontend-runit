import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function ChangeMessage(props) {
    const [message, setMessage] = useState({});
    const history = useHistory();

    useEffect(() => {

        async function getMessage() {
            try {
                let res = await axios.get('http://localhost:5021/kontakt/' + props.match.params.id);
                let messageRes = await res.data;

                setMessage({ emne: messageRes.emne, navn: messageRes.navn, emailadresse: messageRes.emailadresse, besked: messageRes.besked})
            } catch (err) {
                console.log(err);
            }
        }

        getMessage();
    }, [])

    const editMessage = (e) => {
        e.preventDefault();

        axios.put('http://localhost:5021/kontakt/admin/' + props.match.params.id, message, {withCredentials: true})
            .then(res => {
                console.log(res.data);
                history.push('/admin/messages');
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <section className="col-10">
            <article>
                <form onSubmit={editMessage}>
                    <label htmlFor="event-titel">emne:</label>
                    <input onChange={(e) => setMessage({ ...message, emne: e.target.value })} type="text" className="form-control" defaultValue={message.emne} name="event-titel"/>
                    
                    <label htmlFor="event-description">navn:</label>
                    <input onChange={(e) => setMessage({ ...message, navn: e.target.value })} type="text" className="form-control" defaultValue={message.navn} name="event-description"/>
                    
                    <label htmlFor="event-distance">emailadresse:</label>
                    <input onChange={(e) => setMessage({ ...message, emailadresse: e.target.value })} type="email" className="form-control" defaultValue={message.emailadresse} name="event-distance"/>
                    
                    <label htmlFor="event-pris">besked:</label>
                    <input onChange={(e) => setMessage({ ...message, besked: e.target.value })} type="text" className="form-control" defaultValue={message.besked} name="event-pris"/>
                    
                    <button onClick={() => { history.push('/admin/messages')}}>Fortryd</button>
                    <button type="submit" className="btn-success">Send redigering</button>
                </form>
            </article>
        </section>
    )
}

export default ChangeMessage;