import React from 'react'
import picLogin from './picLogin'
import NewActivityComp from './NewActivityComp'
import ExistingActivitiesComp from './ExistingActivitiesComp'
import CompletedActivitiesComp from './CompletedActivitiesComp'
import wonderville from "../images/wonderville.png";
import AddActivityComp from "./AddActivityComp"
import mindfuel_logo from "../images/mindfuel_logo.png";
import { NavLink, Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'

class DashboardComp extends React.Component {
    constructor() {
        super();
        this.state = {
            activePage: ""
        };
    };

    render() {
        return (
            <Router>
                <div id='container'>
                    <header id="wv_header">
                      <img id="wvimg" src={wonderville} alt="wonder" height="115" />
                    </header>

                    <header id="mf_header">
                        <NavLink activeClassName="activeNavLink" id="studentLoginBtn2" to='/studentlogin'>Student Login</NavLink>
                        
                        <img id="mindfuel_logo" src={mindfuel_logo} alt="mindfuel_logo" height="80px" />
                    </header>  

                    <div id='navBar'>
                        <ul>
                            <li><NavLink activeClassName="activeNavLink" className="menuitem" to='/newactivity'>ADD NEW ACTIVITY</NavLink></li>
                            <li><NavLink activeClassName="activeNavLink" className="menuitem" to='/existingactivities'>EXISTING ACTIVITIES</NavLink></li>
                            <li><NavLink activeClassName="activeNavLink" className="menuitem" to='/completedactivities'>COMPLETED ACTIVITIES</NavLink></li>
                        </ul>
                    </div>
                    <div id='bodyContainer'>
                    {/* <Switch> */}
                        <Route exact path='/' component={NewActivityComp} />   
                        <Route path='/newactivity' component={NewActivityComp} />
                        <Route path='/existingactivities' component={ExistingActivitiesComp} />
                        <Route path='/completedactivities' component={CompletedActivitiesComp} />
                        <Route path='/studentlogin' component={picLogin} />
                        <Route exact path='/newactivity/:activityId' component={AddActivityComp} />

                    {/* </Switch> */}
                    </div>
                </div>
            </Router>
        )
    }
}

export default DashboardComp
