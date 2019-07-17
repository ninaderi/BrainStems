import React from 'react'
import picLogin from './picLogin'
import AddActivityComp from './AddActivityComp'
import ExistingActivitiesComp from './ExistingActivitiesComp'
import CompletedActivitiesComp from './CompletedActivitiesComp'
import FavouriteActivitiesComp from './FavouriteActivitiesComp'

import { NavLink, Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom'

class DashboardComp extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>hi from DashboardComp</h1>
                    <NavLink to='/studentlogin'>Student Login</NavLink>
                    <NavLink to='/addactivity'>Add New Activity</NavLink>
                    <NavLink to='/existingactivities'>Existing Activities</NavLink>
                    <NavLink to='/completedactivities'>Completed Activities</NavLink>
                    <NavLink to='/favouriteactivities'>Favourite Activities</NavLink>

                    <Switch>
                        <Route path='/studentlogin' component={picLogin} />
                        <Route path='/addactivity' component={AddActivityComp} />
                        <Route path='/existingactivities' component={ExistingActivitiesComp} />
                        <Route path='/completedactivities' component={CompletedActivitiesComp} />
                        <Route path='/favouriteactivities' component={FavouriteActivitiesComp} />

                    </Switch>
                </div>
            </Router>
        )
    }
}

export default DashboardComp