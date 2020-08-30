import React from 'react';
import { Link } from 'react-router-dom';

function AdminControlePanel() {
    return(
        <section className="col-10">
            <Link className="admin-button" to={'/admin/events'}>Administrer alle løb</Link>
            <Link className="admin-button" to={'/admin/sponsor'}>Administrer alle sponsore</Link>
            <Link className="admin-button" to={'/admin/committee'}>Administrer alle bestyrelsesmedlemmer</Link>
            <Link className="admin-button" to={'/admin/messages'}>Administrer alle beskeder</Link>
        </section>
    )
}

export default AdminControlePanel