import React from 'react'
import ActivitiesCard from "./ActivitiesCard"

class ExistingActivitiesComp extends React.Component {
    render() {
        console.log('from exist')
        return(
            <div>
                <h1>Existing Activities Comp</h1>
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