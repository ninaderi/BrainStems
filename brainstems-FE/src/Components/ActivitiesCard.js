import React, { Component } from "react"
import "../styles/activitiesCard.css"
import vol from "../images/vol.jpg"
import { PassThrough } from "stream"

class ActivitiesCard extends Component {


constructor() {
    super()
    this.state = {
        displayDetails: false,
        activeStudents: []
    }

}


getActiveStudents = async () => {
    const data = await fetch('http://localhost:4000/activeStudents', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            activityCode: this.props.activityCode
          })
      })
      const response = await data.json();
      console.log('list is ', response)
      return response;

    

}

handleClick = async () => {
    if (this.state.displayDetails) {
        this.setState({displayDetails: false})

    } else {
        this.setState({
            displayDetails: true,
            activeStudents: await this.getActiveStudents()
        
    })
    }
}    



closeActivity  = async () => {
    console.log(this.props)
    const data = await fetch('http://localhost:4000/closeActivity', {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({
       activityCode: this.props.activityCode,
     })
 })
 const response = await data.json();  


 return response;
}
render() {
    // console.log('state is ', this.state.activeStudents)
    // const studentList = this.state.activeStudents.map(x => {
    //     return (
    //         <tr>
    //             <td>{x.fname}</td>
    //             <td>{x.lname}</td>
    //             <td>99%</td>
    //             <td>Info</td>
    //         </tr>

    //     )
        
    // })
    
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
                <h2>Activity Code</h2>
                <p>{this.props.activityCode}</p>
                {this.props.showClose && 
                <button className = "button" onClick = {this.closeActivity}>Close Activity</button>}
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
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date Joined</th>
                            <th>Progress</th>
                            <th>More Info</th>
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

