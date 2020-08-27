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
            <article className="row event">
                <div className="col-4">
                    <img className="d-block w-100" src={"http://localhost:5021/images/events/" + event.billede} alt={event.titel}/>
                </div>

                <div className="col-8">
                    <p>UD AF {event.antalpladser} PLADSER ER OPTAGET</p>
                    <p className="event-title">{event.titel}</p>
                    <p className="event-dato">D. / Kl. :</p>
                    <p>{event.beskrivelse}</p>
                    <p>Region: {event.region.regionnavn}</p>
                    <p>Distance: {event.distance * 0.001} km</p>
                    <p>Pris: {event.pris} kr</p>
                </div>
            </article>
        )
    }

    return (
        <section className="col-10">
            {theEvent}
        </section>
    )
}

export default TheEvent