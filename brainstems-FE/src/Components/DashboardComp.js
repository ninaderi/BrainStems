import React from 'react'
//import picLogin from './picLogin'
import AddActivityComp from './AddActivityComp'
import ExistingActivitiesComp from './ExistingActivitiesComp'
import CompletedActivitiesComp from './CompletedActivitiesComp'
import FavouriteActivitiesComp from './FavouriteActivitiesComp'
import wonderville from "../images/wonderville.png";
import { NavLink, Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'



class DashboardComp extends React.Component {
    constructor() {
        super();
        this.state = {};
    };

    // onOver = (e) => {
    //     e.target.style.font_color = 'red';
    //     e.target.style.transform = 'scale(1.3, 1.3)';
        
    // };

    // onOut = (e) => {
    //     // e.target.style.backgroundColor = '';
    //     e.target.style.transform = 'initial';
        
    // };

    render() {
        return (
            <Router>
                <div id='container'>
                    <header>
                      <img id="wvimg" src={wonderville} alt="wonderville" height="100px" />
                    </header>                    
                    <div id='navBar'>
                        {/* <NavLink to='/studentlogin'>Student Login</NavLink> */}
                        <ul>
                            <li><NavLink className="menuitem" to='/addactivity'>ADD NEW ACTIVITY</NavLink></li>
                            <li><NavLink className="menuitem" to='/existingactivities'>EXISTING ACTIVITIES</NavLink></li>
                            <li><NavLink className="menuitem" to='/completedactivities'>COMPLETED ACTIVITIES</NavLink></li>
                            <li><NavLink className="menuitem" to='/favouriteactivities'>FAVOURITE ACTIVITIES</NavLink></li>
                        </ul>
                    </div>
                    <div id='bodyContainer'>
                    <Switch>
                        {/* <Route path='/studentlogin' component={picLogin} /> */}
                        <Route path='/addactivity' component={AddActivityComp} />
                        <Route path='/existingactivities' component={ExistingActivitiesComp} />
                        <Route path='/completedactivities' component={CompletedActivitiesComp} />
                        <Route path='/favouriteactivities' component={FavouriteActivitiesComp} />

                    </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default DashboardComp