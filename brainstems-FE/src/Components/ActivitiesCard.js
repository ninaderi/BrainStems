import React, { Component } from "react"
import "../styles/activitiesCard.css"
import vol from "../images/vol.jpg"

class ActivitiesCard extends Component {


constructor() {
    super()
    this.state = {
        displayDetails: false,
    }

}
handleClick = () => {
    this.state.displayDetails 
    ? this.setState({displayDetails: false})
    : this.setState({displayDetails: true})
}    

render() {

    console.log(this.props, "props from activity card")
    return (
        <div className = "activityDiv">
        <div className = "topSection">
            <img id="activityImage" src = {this.props.img} alt = "Activity" />
            <div className = "textField">
                <table>
                    <tbody>
                        <tr>
                            <th>Date Class Created</th>
                            <td>{new Date(this.props.created_at).toLocaleDateString()}</td>
                        </tr>
                        <tr>
                            <th>Expiry Date</th>
                            <td>{this.props.expiry}</td>
                        </tr>
                        <tr>
                            <th>Classroom Name</th>
                            <td>{this.props.classRoomName}</td>
                        </tr>
                        <tr>
                            <th>Grade</th>
                            <td>{this.props.grade}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className = "activityCode">
                <h1>Activity Code</h1>
                <p>{this.props.activityCode}</p>
                <button className = "button">Close Activity</button>
                {this.state.displayDetails 
                ?  <button className = "button" onClick = {this.handleClick}>Close Details</button>
                :<button className = "button" onClick = {this.handleClick}>Details</button>
                }
            </div>
            </div>
       {this.state.displayDetails ? 
       
       <div className = "detailsTable">

        <h1>List of Students Assigned To this Activity</h1>

        <table>
                    <tbody>
                        
                        <tr>
                            <th>Student Name</th>
                            <th>Date Assigned</th>
                            <th>Date Closed</th>
                            <th>Progress</th>
                            <th>More Info</th>
                        </tr>
                        <tr>
                            <td>Student 1</td>
                            <td>2019-06-01</td>
                            <td>2019-06-03</td>
                            <td>99%</td>
                            <td>Info</td>
                        </tr>
                        <tr>
                            <td>Student 2</td>
                            <td>2019-06-01</td>
                            <td>2019-06-03</td>
                            <td>45%</td>
                            <td>Info</td>
                        </tr>
                    </tbody>
                </table>

        </div>
        : null
       }
        </div>
    )

}
}

export default ActivitiesCard

