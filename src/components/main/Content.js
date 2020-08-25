import React from 'react';
import { Route } from 'react-router-dom';
import Logo from '../../images/logo/logo.jpg';
import HomeContent from './content/HomeContent';
import EventsContent from './content/EventsContent';
import SponsoreContent from './content/SponsoreContent';
import AboutContent from './content/AboutContent';
import ContactContent from './content/ContaktContent';

function Content() {
    return(
        
        <div className="col-9" id="Content">
            <img src={Logo} alt="logo"/>

            <div>
                <Route exact path='/' component={HomeContent}/>
                <Route exact path='/events' component={EventsContent}/>
                <Route exact path='/sponsores' component={SponsoreContent}/>
                <Route exact path='/about' component={AboutContent}/>
                <Route exact path='/contact' component={ContactContent}/>
            </div>
        </div>
    )
}

export default Content