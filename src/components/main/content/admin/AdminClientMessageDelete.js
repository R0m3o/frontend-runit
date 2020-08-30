import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function DeleteMessage(props) {
    const [message, setMessage] = useState({});
    const history = useHistory();

    useEffect(() => {
        (async () => {
            try {
                let res = await axios.get('http://localhost:5021/kontakt/' + props.match.params.id);
                setMessage(await res.data);
            } catch (error) {
                console.log("something bad has happened", error)
            }
        })()
        
    }, [])


    const deleteMessage = e => {
        axios.delete('http://localhost:5021/kontakt/admin/' + props.match.params.id, { withCredentials: true})
            .then(res => {
                console.log(res.data)
                history.push('/admin/messages');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <section className="col-10">
            <article className="card mt-3">
                <div className="card-body text-center">
                    <h3 className="card-title">Er du sikker på at du vil slette denne event?</h3>
                    <h5>{message.emne}</h5>
                    <p>{message.navn}</p>
                    <p>{message.emailadresse}</p>
                    <div className="row">
                        <button className="btn-success offset-md-4 col-md-1" onClick={() => { history.push('/admin/messages')}}>Fortryd</button>
                        <button className="btn-danger offset-md-2 col-md-1" onClick={deleteMessage}>Slet</button>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default DeleteMessage;