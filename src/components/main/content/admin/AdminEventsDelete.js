import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function DeleteEvent(props) {
    const [event, setEvent] = useState({});
    const history = useHistory();

    useEffect(() => {
        (async () => {
            try {
                let res = await axios.get('http://localhost:5021/event/' + props.match.params.id);
                setEvent(await res.data);
            } catch (error) {
                console.log("something bad has happened", error)
            }
        })()
        
    }, [])


    const deleteEvent = e => {
        axios.delete('http://localhost:5021/event/admin/' + props.match.params.id)
            .then(res => {
                console.log(res.data)
                history.push('/admin/events');
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
                    <h5>{event.titel}</h5>
                    <p>{event.beskrivelse}</p>
                    <div className="row">
                        <button className="btn-success offset-md-4 col-md-1" onClick={() => { history.push('/admin/events')}}>Fortryd</button>
                        <button className="btn-danger offset-md-2 col-md-1" onClick={deleteEvent}>Slet</button>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default DeleteEvent;