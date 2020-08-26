import React from 'react';
import { Link } from 'react-router-dom';

function Search() {
    return(
        <div className="offset-3 col-3">
            <Link to='/advancedsearch'>Advanceret søg</Link>
        </div>
    )
}

export default Search

