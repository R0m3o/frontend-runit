import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function ChangeEvent(props) {
    const [event, setEvent] = useState({});
    const history = useHistory();

    useEffect(() => {

        async function getEvent() {
            try {
                let res = await axios.get('http://localhost:5021/event/' + props.match.params.id);
                let eventRes = await res.data;

                setEvent({ titel: eventRes.titel, beskrivelse: eventRes.beskrivelse, distance: eventRes.distance, pris: eventRes.pris, antalpladser: eventRes.antalpladser, region: eventRes.region})
            } catch (err) {
                console.log(err);
            }
        }

        getEvent();
    }, [])

    const editEvent = (e) => {
        e.preventDefault();

        axios.put('http://localhost:5021/event/admin/' + props.match.params.id, event)
            .then(res => {
                console.log(res.data);
                history.push('/admin/events');
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <section className="col-10">
            <article>
                <form onSubmit={editEvent}>
                    <label htmlFor="event-titel">titel:</label>
                    <input onChange={(e) => setEvent({ ...event, titel: e.target.value })} type="text" className="form-control" defaultValue={event.titel} name="event-titel"/>
                    
                    <label htmlFor="event-description">beskrivelse:</label>
                    <input onChange={(e) => setEvent({ ...event, beskrivelse: e.target.value })} type="text" className="form-control" defaultValue={event.beskrivelse} name="event-description"/>
                    
                    <label htmlFor="event-distance">distance:</label>
                    <input onChange={(e) => setEvent({ ...event, distance: e.target.value })} type="number" className="form-control" defaultValue={event.distance} name="event-distance"/>
                    
                    <label htmlFor="event-pris">Pris:</label>
                    <input onChange={(e) => setEvent({ ...event, pris: e.target.value })} type="number" className="form-control" defaultValue={event.pris} name="event-pris"/>
                    
                    <label htmlFor="event-spots-left">antalpladser:</label>
                    <input onChange={(e) => setEvent({ ...event, antalpladser: e.target.value })} type="number" className="form-control" defaultValue={event.antalpladser} name="event-spots-left"/>
                    
                    <label htmlFor="event-region">region:</label>
                    <input onChange={(e) => setEvent({ ...event, region: e.target.value })} type="text" className="form-control" defaultValue={event.region} name="event-spots-left"/>
                    
                    <button onClick={() => { history.push('/admin/events')}}>Fortryd</button>
                    <button type="submit" className="btn-success">Send redigering</button>
                </form>
            </article>
        </section>
    )
}

export default ChangeEvent;