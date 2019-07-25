import React from 'react'
import picLogin from './picLogin'
import ActivityComp from './ActivityComp'
import ExistingActivitiesComp from './ExistingActivitiesComp'
import CompletedActivitiesComp from './CompletedActivitiesComp'
import FavouriteActivitiesComp from './FavouriteActivitiesComp'
import wonderville from "../images/wonderville.png";
import mindfuel_logo from "../images/mindfuel_logo.png";
import { NavLink, Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'



class DashboardComp extends React.Component {
    constructor() {
        super();
        this.state = {
            activePage: ""
        };
    };

    onClickStudentLogin = (e) => {
        console.log('click')
        window.open('/studentlogin');
    };

    onClickNavBtn = (e) => {
        this.setState({activePage:e.target.id});
    }

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
                    <header id="wv_header">
                      <img id="wvimg" src={wonderville} alt="wonder" height="115" />
                    </header>

                    <header id="mf_header">
                        {/* <NavLink id="studentLoginBtn" to='/studentlogin' onClick={this.onClickStudentLogin}>Student Login</NavLink> */}
                        <button id="studentBtn" >Student</button>
                        <img id="mindfuel_logo" src={mindfuel_logo} alt="mindfuel_logo" height="80px" />
                    </header>  

                    <div id='navBar'>
                        <ul>
                            <li><NavLink id="addActivityBtn" onClick={this.onClickNavBtn} className="menuitem" to='/addactivity'>ADD NEW ACTIVITY</NavLink></li>
                            <li><NavLink className="menuitem" to='/existingactivities'>EXISTING ACTIVITIES</NavLink></li>
                            <li><NavLink className="menuitem" to='/completedactivities'>COMPLETED ACTIVITIES</NavLink></li>
                            <li><NavLink className="menuitem" to='/favouriteactivities'>FAVOURITE ACTIVITIES</NavLink></li>
                        </ul>
                    </div>
                    <div id='bodyContainer'>
                    <Switch>
                        
                        <Route path='/addactivity' component={ActivityComp} />
                        <Route path='/existingactivities' component={ExistingActivitiesComp} />
                        <Route path='/completedactivities' component={CompletedActivitiesComp} />
                        <Route path='/favouriteactivities' component={FavouriteActivitiesComp} />
                        <Route path='/studentlogin' component={picLogin} />

                    </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default DashboardComp