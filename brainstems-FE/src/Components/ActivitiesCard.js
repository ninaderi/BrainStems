import React, { Component } from "react"
import "./activitiesCard.css"
import vol from "../images/vol.jpg"

class ActivitiesCard extends Component {

render() {

    return (
        <div className = "activityDiv">
            <img id="activityImage" src = {vol} alt = "Picture of Activity" />
            <div className = "textField">
                <table>
                    <tbody>
                        <tr>
                            <th>Date Class Created</th>
                            <td>Props for Date Class Created</td>
                        </tr>
                        <tr>
                            <th>Expiry Date</th>
                            <td>Props for Class Expiry Date</td>
                        </tr>
                        <tr>
                            <th>Classroom Name</th>
                            <td>Props for Classroom Name</td>
                        </tr>
                        <tr>
                            <th>Grade</th>
                            <td>Props for Grade</td>
                        </tr>
                        <tr>
                            <th>Other Info</th>
                            <td>Props for Other Info</td>
                        </tr>
                        <tr>
                            <th>Assigned Activities</th>
                            <td>Props for Assigned Activities</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className = "activityCode">
                <h1>Activity Code</h1>
                <p>{"props for activity code"}</p>
                <button className = "button">Close Activity</button>
            </div>


        </div>
    )

}
}

export default ActivitiesCard

