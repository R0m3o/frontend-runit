import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function EventsContent() {
    const [events, setEvents] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5021/event')
            .then(res => {
                const response = res.data;
                setEvents(response)
            });
    }, [])

    let listOfEvents = "";

    if (events.length > 0) {
        listOfEvents = events.map(event => {
            return (
                <article key={event.id} className="col-4">
                    <img className="img-fluid" src={"http://localhost:5021/images/events/" + event.billede} alt={event.titel}/>
                    <p>{event.titel}</p>
                    <p>{event.dato}</p>
                    <p>{event.beskrivelse}</p>
                    <p>Pris: {event.pris}kr</p>
                    <Link to={'/events/' + event._id}>LÆS MERE</Link>
                </article>
            )
        })
    } else {
        return <p>Der er ingen Events</p>
    }

    return(
        <section className="col-10">
            <div className="row">
                <form action="" className="col-2">
                    <p>Indkreds</p>
                    <p>Distance</p>
                    <p>Hvor i landet?</p>
                </form>
                <div className="col-10">
                    <p>Alle events</p>

                    <div className="row">
                        {listOfEvents}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventsContent