import React from 'react'
import ActivitiesCardList from "../Components/ActivitiesCardList"

class ExistingActivitiesComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activities: [],
        }
    }

    componentDidMount = async () => {
        let response = await fetch("http://localhost:4000/exsistingActivities");
    response = await response.json();
    this.setState({ activities: response.data });
    }
    render() {
        console.log('from exist')
        return(
            <div id="activityArea">
                <h1 id = "activityAreaHeader" >Existing Activities</h1>
                <hr/>
                <div id = "activityAreaCards">
                    <ActivitiesCardList activities = {this.state.activities}/>
                </div>
            </div>
        )
    }
}

export default ExistingActivitiesComp