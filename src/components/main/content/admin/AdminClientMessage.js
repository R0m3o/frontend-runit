import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function AdminClientMessage() {
    const [messages, setMessages] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5021/kontakt')
            .then(res => {
                const response = res.data;
                setMessages(response)
            });
    }, [])

    let listOfMessages = "";

    if (messages.length > 0) {
        listOfMessages = messages.map(message => {
            
                return (
                    <div className="col-4">
                        <article key={message.id} className="card">
                            <div className="card-body"> 
                                <p className="card-title">{message.emne}</p>
                                <p className="card-text">{message.navn}</p>
                                <p className="card-text">{message.emailadresse}</p>
                                <p className="card-text">{message.besked}</p>
                                <div className="nav-item"> 
                                    <Link to={'/admin/delete/messages/' + message._id} className="admin-button">SLET BESKED</Link>
                                    <Link to={'/admin/edit/messages/' + message._id} className="admin-button">RET BESKED</Link>
                                </div>
                            </div>
                        </article>
                    </div>
                )
        })} 

    return(
        <section className="col-10">
            <div className="row">
                <div className="col-10">
                    <p>Alle beskeder</p>

                    <div className="row">
                        {listOfMessages}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminClientMessage;