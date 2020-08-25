import React from 'react';
import NextEventAdd from './right-column/NextEventAdd';
import NewsLetter from './right-column/NewsLetter';
import SponsorAdd from './right-column/SponsorAdd';

function RightColumn() {
    return(
        <div className="col-3">
            <NextEventAdd/>
            <NewsLetter/>
            <SponsorAdd/>
        </div>
    )
}

export default RightColumn