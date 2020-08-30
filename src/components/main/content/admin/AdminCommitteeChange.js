import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function ChangeMember(props) {
    const [member, setMember] = useState({});
    const history = useHistory();

    useEffect(() => {

        async function getMember() {
            try {
                let res = await axios.get('http://localhost:5021/bestyrelse/' + props.match.params.id);
                let memberRes = await res.data;

                setMember({ fornavn: memberRes.fornavn, efternavn: memberRes.efternavn, email: memberRes.email, billede: memberRes.billede, beskrivelse: memberRes.beskrivelse})
            } catch (err) {
                console.log(err);
            }
        }

        getMember();
    }, [])

    const editMember = (e) => {
        e.preventDefault();

        axios.put('http://localhost:5021/bestyrelse/admin/' + props.match.params.id, member, {withCredentials: true})
            .then(res => {
                console.log(res.data);
                history.push('/admin/committee');
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <section className="col-10">
            <article>
                <form onSubmit={editMember}>
                    <label htmlFor="event-description">fornavn:</label>
                    <input onChange={(e) => setMember({ ...member, fornavn: e.target.value })} type="text" className="form-control" defaultValue={member.fornavn} name="event-description"/>
                    
                    <label htmlFor="event-distance">efternavn:</label>
                    <input onChange={(e) => setMember({ ...member, efternavn: e.target.value })} type="text" className="form-control" defaultValue={member.efternavn} name="event-distance"/>
                    
                    <label htmlFor="event-pris">email:</label>
                    <input onChange={(e) => setMember({ ...member, email: e.target.value })} type="email" className="form-control" defaultValue={member.email} name="event-pris"/>
                    
                    <label htmlFor="event-spots-left">billede:</label>
                    <input onChange={(e) => setMember({ ...member, billede: e.target.value })} type="text" className="form-control" defaultValue={member.billede} name="event-spots-left"/>
                    
                    <label htmlFor="event-region">beskrivelse:</label>
                    <input onChange={(e) => setMember({ ...member, beskrivelse: e.target.value })} type="text" className="form-control" defaultValue={member.beskrivelse} name="event-spots-left"/>
                    
                    <button onClick={() => { history.push('/admin/committee')}}>Fortryd</button>
                    <button type="submit" className="btn-success">Send redigering</button>
                </form>
            </article>
        </section>
    )
}

export default ChangeMember;