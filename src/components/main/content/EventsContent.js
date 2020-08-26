import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function EventsContent() {
    const [events, setEvents] = useState({});
    const [region, setRegion] = useState("AllRegions");
    const [distance, setDistance] = useState("AllDistances");

    function regionChange(e) {
        setRegion(e.target.value);
        console.log(e.target.value);
    }

    function distanceChange(e) {
        setDistance(e.target.value);
        console.log(e.target.value);
    }

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
            if (region === "AllRegions" && distance === "AllDistances") {
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
            }

            else if (region ==="AllRegions" && distance === "OverTen" && event.distance >= 10000) {
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
            }

            else if (region ==="AllRegions" && distance === "UnderTen" && event.distance < 10000) {
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
            }

            else if (event.region.regionnavn === region && distance === "AllDistances") {
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
            }

            else if (event.region.regionnavn === region && distance === "OverTen" && event.distance >= 10000) {
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
            }

            else if (event.region.regionnavn === region && distance === "UnderTen" && event.distance < 10000) {
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
            }
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
                    <div className="form-check">
                        <input onChange={distanceChange} type="radio" id="AllDistancesInput" name="distance" value="AllDistances"/>
                        <label htmlFor="allDistancesInput">Alle distancer</label>
                    </div>

                    <div className="form-check">
                        <input onChange={distanceChange} type="radio" id="TenUpInput" name="distance" value="OverTen"/>
                        <label htmlFor="TenUpInput">Over 10 km</label>
                    </div>
                    
                    <div className="form-check">
                        <input onChange={distanceChange} type="radio" id="TenDownInput" name="distance" value="UnderTen"/> 
                        <label htmlFor="TenDownInput">Under 10 km</label>
                    </div>

                    <label htmlFor="choseARegion"></label>
                    <select className="form-control" name="choseARegion" id="choseARegion" onChange={regionChange}>
                        <option value="AllRegions">Hele landet</option>
                        <option value="Midtjylland">Midtjylland</option>
                        <option value="Nordjylland">Nordjylland</option>
                        <option value="Sydjylland">Sydjylland</option>
                        <option value="Fyn">Fyn</option>
                        <option value="Sjælland">Sjælland</option>
                        <option value="Bornholm">Bornholm</option>
                    </select>
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