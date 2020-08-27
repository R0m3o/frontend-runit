import React from 'react';
import { Link } from 'react-router-dom';

function AdminControlePanel() {
    return(
        <section className="col-10">
            <Link to={'/admin/events'}>Administrer alle løb</Link>
        </section>
    )
}

export default AdminControlePanel