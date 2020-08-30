import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function DeleteMember(props) {
    const [member, setMember] = useState({});
    const history = useHistory();

    useEffect(() => {
        (async () => {
            try {
                let res = await axios.get('http://localhost:5021/bestyrelse/' + props.match.params.id);
                setMember(await res.data);
            } catch (error) {
                console.log("something bad has happened", error)
            }
        })()
        
    }, [])


    const deleteMember = e => {
        axios.delete('http://localhost:5021/bestyrelse/admin/' + props.match.params.id, { withCredentials: true})
            .then(res => {
                console.log(res.data)
                history.push('/admin/committee');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <section className="col-10">
            <article className="card mt-3">
                <div className="card-body text-center">
                    <h3 className="card-title">Er du sikker på at du vil slette denne bestyrelsesmedlem?</h3>
                    <h5>{member.fornavn}</h5>
                    <p>{member.efternavn}</p>
                    <p>{member.email}</p>
                    <div className="row">
                        <button className="btn-success offset-md-4 col-md-1" onClick={() => { history.push('/admin/committee')}}>Fortryd</button>
                        <button className="btn-danger offset-md-2 col-md-1" onClick={deleteMember}>Slet</button>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default DeleteMember;