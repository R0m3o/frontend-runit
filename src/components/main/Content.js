import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import Logo from '../../images/logo/logo.jpg';

import HomeContent from './content/HomeContent';
import Login from './content/Login';
import AdminControlePanel from './content/AdminControlePanel';
import AdminEvents from './content/admin/AdminEvents';
import AdminEventsChange from './content/admin/AdminEventsChange';
import AdminEventsDelete from './content/admin/AdminEventsDelete';
import AdvancedSearchContent from './content/AdvancedSearchContent';
import EventsContent from './content/EventsContent';
import TheEvent from './content/individualContent/TheEvent';
import SponsoreContent from './content/SponsoreContent';
import AboutContent from './content/AboutContent';
import ContactContent from './content/ContaktContent';
import { LoginContext } from './content/admin/loginContext';

const PrivateRoute = ({ component, ...options }) => {
    const { loggedIn } = useContext(LoginContext);
    console.log("privateroute: loggedIn", loggedIn)
  
    const finalComponent = loggedIn ? component : Login;
    return <Route {...options} component={finalComponent}/>
  }

function Content() {
    return(
        
        <div className="col-9" id="Content">
            <img src={Logo} alt="logo" className="logo img-fluid"/>

            <div className="row">
                <Route exact path='/' component={HomeContent}/>
                <Route exact path='/login' component={Login}/>
                <PrivateRoute exact path='/admin' component={AdminControlePanel}/>
                <PrivateRoute exact path='/admin/events' component={AdminEvents}/>
                <PrivateRoute exact path='/admin/edit/events/:id' component={AdminEventsChange}/>
                <PrivateRoute exact path='/admin/delete/events/:id' component={AdminEventsDelete}/>
                <Route exact path='/advancedsearch' component={AdvancedSearchContent}/>
                <Route exact path='/events' component={EventsContent}/>
                <Route exact path='/events/:id' component={TheEvent}/> 
                <Route exact path='/sponsores' component={SponsoreContent}/>
                <Route exact path='/about' component={AboutContent}/>
                <Route exact path='/contact' component={ContactContent}/>
            </div>
        </div>
    )
}

export default Content