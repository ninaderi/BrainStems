import React from 'react'
import ActivitiesCard from "./ActivitiesCard"

class ExistingActivitiesComp extends React.Component {
    render() {
        console.log('from exist')
        return(
            <div>
                <h1>hi from ExistingActivitiesComp</h1>
                <ActivitiesCard />
                <ActivitiesCard />
                <ActivitiesCard />
                <ActivitiesCard />
                <ActivitiesCard />
                <ActivitiesCard />
                <ActivitiesCard />
            </div>
        )
    }
}

export default ExistingActivitiesComp