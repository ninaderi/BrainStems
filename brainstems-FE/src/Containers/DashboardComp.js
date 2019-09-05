import React from 'react'
import picLogin from './picLogin'
import NewActivityComp from './NewActivityComp'
import ExistingActivitiesComp from './ExistingActivitiesComp'
import CompletedActivitiesComp from './CompletedActivitiesComp'
import wonderville from "../images/wonderville.png";
import AddActivityComp from "./AddActivityComp"
import logInComp from "./logInComp"
import ActivityComp from "./ActivityComp"
import mindfuel_logo from "../images/mindfuel_logo.png";
import { NavLink, Route, Link, BrowserRouter as Router } from 'react-router-dom'

class DashboardComp extends React.Component {
    constructor() {
        super();
        this.state = {
            activePage: "",
            activities: "oldDashstate",
            showTeacherNav: true,
        };
    };

    componentDidMount = async() => {

        let response = await fetch("http://localhost:4000/activities")
        response = await response.json()
        this.setState({activities: response})
    }

    handleClick = () => {
        this.setState({showTeacherNav: false})

    }
 

    render() {

        return (
            <Router>
                <div id='container'>
                    <header id="wv_header">
                      <img id="wvimg" src={wonderville} alt="wonder" height="115" />
                    </header>

                    <header id="mf_header">
                        <NavLink activeClassName="activeNavLink" id="studentLoginBtn2" to='/studentlogin' onClick = {this.handleClick}>Student Login</NavLink>
                        <img id="mindfuel_logo" src={mindfuel_logo} alt="mindfuel_logo" height="80px" />
                    </header>  

                    {this.state.showTeacherNav &&
                    <div id='navBar'>
                        <ul>
                            <li><NavLink activeClassName="activeNavLink" className="menuitem" to='/newActivity'>ADD NEW ACTIVITY</NavLink></li>
                            <li><NavLink activeClassName="activeNavLink" className="menuitem" to='/existingactivities'>EXISTING ACTIVITIES</NavLink></li>
                            <li><NavLink activeClassName="activeNavLink" className="menuitem" to='/completedactivities'>COMPLETED ACTIVITIES</NavLink></li>
                        </ul>
                    </div>}
                    <div id='bodyContainer'>
                    
                        {/* <Route exact path='/' render = {(props) => <NewActivityComp allActivities = {this.state.activities}/>}/>    */}
                        <Route path='/newActivity' allActivities2 = {this.state.activities} render = {(props) => <NewActivityComp allActivities = {this.state.activities}/>} />
                        <Route path='/existingactivities' component={ExistingActivitiesComp} />
                        <Route path='/completedactivities' component={CompletedActivitiesComp} />
                        <Route path='/studentlogin' component={logInComp} />
                        <Route exact path='/addactivity/:activityId' allActivities2 = {this.state.activities} render = {(props) => <AddActivityComp allActivities = {this.state.activities}/>} />
                        <Route exact path='/activity' component = {ActivityComp}/>

                    
                    </div>
                </div>
            </Router>
        )
    }
}

export default DashboardComp
