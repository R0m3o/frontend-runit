import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function ChangeSponsor(props) {
    const [sponsor, setSponsor] = useState({});
    const history = useHistory();

    useEffect(() => {

        async function getSponsor() {
            try {
                let res = await axios.get('http://localhost:5021/sponsor/' + props.match.params.id);
                let sponsorRes = await res.data;

                setSponsor({ navn: sponsorRes.navn, logo: sponsorRes.logo})
            } catch (err) {
                console.log(err);
            }
        }

        getSponsor();
    }, [])

    const editSponsor = (e) => {
        e.preventDefault();

        axios.put('http://localhost:5021/sponsor/admin/' + props.match.params.id, sponsor, {withCredentials: true})
            .then(res => {
                console.log(res.data);
                history.push('/admin/sponsor');
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <section className="col-10">
            <article>
                <form onSubmit={editSponsor}>
                    <label htmlFor="event-titel">navn:</label>
                    <input onChange={(e) => setSponsor({ ...sponsor, navn: e.target.value })} type="text" className="form-control" defaultValue={sponsor.navn} name="event-titel"/>
                    
                    <label htmlFor="event-description">logo:</label>
                    <input onChange={(e) => setSponsor({ ...sponsor, logo: e.target.value })} type="text" className="form-control" defaultValue={sponsor.logo} name="event-description"/>
                    
                    <button onClick={() => { history.push('/admin/sponsor')}}>Fortryd</button>
                    <button type="submit" className="btn-success">Send redigering</button>
                </form>
            </article>
        </section>
    )
}

export default ChangeSponsor;