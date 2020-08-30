import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AdminCommittee() {
    const [members, setMembers] = useState({});
    const [position, setPosition] = useState("Formand");

    function positionChange(e) {
        setPosition(e.target.value);
    }

    useEffect(() => {
        axios.get('http://localhost:5021/bestyrelse')
            .then(res => {
                const response = res.data;
                setMembers(response)
            });
    }, [])
    
    let listOfFacultyMembers = "";

    if (members.length > 0) {
        listOfFacultyMembers = members.map(member => {
            if (member.bestyrelsespost.post !== position) {
                return <div></div>
            } else {
                return (
                    <div key={member.id} className="row">
                        <div className="col-4">
                            <img className="img-fluid" src={"http://localhost:5021/images/bestyrelse/" + member.billede} alt={member.fornavn + " " + member.efternavn}/>
                        </div>
                        <div className="col-6">
                            <p>{member.fornavn} {member.efternavn}</p>
                            <p>{member.bestyrelsespost.post}</p>
                            <p>{member.beskrivelse}</p>
                            <p>Email: {member.email}</p>
                            <div className="nav-item"> 
                                <Link to={'/admin/delete/committee/' + member._id} className="admin-button">SLET MEDLEM</Link>
                                <Link to={'/admin/edit/committee/' + member._id} className="admin-button">RET MEDLEM</Link>
                            </div>
                        </div>
                    </div>
                )
            }          
        })
    } else {
        return <p>Noget gik galt</p>
    } 

    return(
        <section className="col-10">
            <div className="row">

                <article className="col-7">
                    <p>Her kan du finde information om vores bestyrelse</p>

                    <form action="" className="col-6">
                        <select className="form-control" name="positions" id="PositionInput" onChange={positionChange}>
                            <option value="Formand">Formand</option>
                            <option value="Kasserer">Kasserer</option>
                            <option value="Bestyrelsesmedlem">Bestyrelsesmedlem</option>
                            <option value="Næstformand">Næstformand</option>
                            <option value="Sekretær">Sekretær</option>
                        </select>
                    </form>

                    {listOfFacultyMembers}
                </article>
            </div>
        </section>
    )
}

export default AdminCommittee