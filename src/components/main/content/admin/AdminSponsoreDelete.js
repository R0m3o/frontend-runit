import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function DeleteSponsor(props) {
    const [sponsor, setSponsor] = useState({});
    const history = useHistory();

    useEffect(() => {
        (async () => {
            try {
                let res = await axios.get('http://localhost:5021/sponsor/' + props.match.params.id);
                setSponsor(await res.data);
            } catch (error) {
                console.log("something bad has happened", error)
            }
        })()
        
    }, [])


    const deleteSponsor = e => {
        axios.delete('http://localhost:5021/sponsor/admin/' + props.match.params.id, { withCredentials: true})
            .then(res => {
                console.log(res.data)
                history.push('/admin/sponsor');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <section className="col-10">
            <article className="card mt-3">
                <div className="card-body text-center">
                    <h3 className="card-title">Er du sikker på at du vil slette denne sponsor?</h3>
                    <h5>{sponsor.navn}</h5>
                    <p>{sponsor.logo}</p>
                    <div className="row">
                        <button className="btn-success offset-md-4 col-md-1" onClick={() => { history.push('/admin/sponsor')}}>Fortryd</button>
                        <button className="btn-danger offset-md-2 col-md-1" onClick={deleteSponsor}>Slet</button>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default DeleteSponsor;