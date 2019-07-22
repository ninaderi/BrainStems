import React from 'react'
import ActivitiesCard from "./ActivitiesCard"

class ExistingActivitiesComp extends React.Component {
    render() {
        console.log('from exist')
        return(
            <div id="activityArea">
                <h1 id="activityAreaHeader" >Existing Activities</h1>
                <hr/>
                <div id="activityAreaCards">
                    <ActivitiesCard />
                    <ActivitiesCard />
                    <ActivitiesCard />
                    <ActivitiesCard />
                    <ActivitiesCard />
                    <ActivitiesCard />
                    <ActivitiesCard />
                </div>
            </div>
        )
    }
}

export default ExistingActivitiesComp