import React from 'react'
//import picLogin from './picLogin'
import AddActivityComp from './AddActivityComp'
import ExistingActivitiesComp from './ExistingActivitiesComp'
import CompletedActivitiesComp from './CompletedActivitiesComp'
import FavouriteActivitiesComp from './FavouriteActivitiesComp'

import { NavLink, Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'

class DashboardComp extends React.Component {
    render() {
        return (
            <Router>
                <div id='container'>
                    <header>
                        <h1>Wonderville</h1>
                    </header>                    
                    <div id='navBar'>
                        {/* <NavLink to='/studentlogin'>Student Login</NavLink> */}
                        <ul>
                            <li><NavLink to='/addactivity'>Add New Activity</NavLink></li>
                            <li><NavLink to='/existingactivities'>Existing Activities</NavLink></li>
                            <li><NavLink to='/completedactivities'>Completed Activities</NavLink></li>
                            <li><NavLink to='/favouriteactivities'>Favourite Activities</NavLink></li>
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