import React, { Component } from "react"

class ActivitiesCard extends Component {

render() {

    return (
        <div>
            <img src = {""} alt = "Picture of Activity" />
            <div className = "textField">
                <table>
                    <tr>
                        <td>Date Class Created</td>
                        <td>Class Expiry Date</td>
                        <td>Classroom Name</td>
                        <td>Grade</td>
                        <td>Other Info</td>
                        <td>Assigned Activities</td>
                    </tr>
                    <tr>
                        <td>Props for Date Class Created</td>
                        <td>Props for Class Expiry Date</td>
                        <td>Props for Classroom Name</td>
                        <td>Props for Grade</td>
                        <td>Props for Other Info</td>
                        <td>Props for Assigned Activities</td>
                    </tr>
                </table>
            </div>
            <div className = "activityCode">
                <h1>Activity Code</h1>
                {"props for activity code"}
                <button>Close Activity</button>
            </div>


        </div>
    )

}
}

export default ActivitiesCard

