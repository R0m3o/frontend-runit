import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TheEvent(props) {
    const [event, setEvent] = useState(); 

    useEffect(() => {
        axios.get('http://localhost:5021/event/' + props.match.params.id)
            .then(res => {
                const response = res.data;
                setEvent(response);
            });
    }, [])


    let theEvent = "";

    if (event !== undefined) {
        theEvent = (
            <article className="row">
                <div className="col-4">
                    <img className="img-fluid" src={"http://localhost:5021/images/events/" + event.billede} alt={event.titel}/>
                </div>

                <div className="col-8">
                    <p>{event.titel}</p>
                    <p>{event.dato}</p>
                    <p>{event.beskrivelse}</p>
                    <p>Region: {"http://localhost:5021/region/" + event.region}</p>
                    <p>Distance: {event.distance * 0.001} km</p>
                    <p>Pris: {event.pris} kr</p>
                </div>
            </article>
        )
    }

    return (
        <section>
            {theEvent}
        </section>
    )
}

export default TheEvent