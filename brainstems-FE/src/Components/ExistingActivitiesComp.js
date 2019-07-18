import React from 'react'
import ActivitiesCard from "./ActivitiesCard"

class ExistingActivitiesComp extends React.Component {
    render() {
        console.log('from exist')
        return(
            <div>
                <h1 id="activityAreaHeader" >Existing Activities</h1>
            
                <div id="activityArea">
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