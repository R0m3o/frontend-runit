import React from 'react';
import LogoBot from '../../images/logo/logobot.png';

function Footer() {
    return(
        <footer className="row container-fluid">
            <div className="offset-9 col-3">
                <img src={LogoBot} alt="bottom logo" className="logo img-fluid"/>
            </div>
        </footer>
    )
}

export default Footer