import React from "react";

import "../styles/activitiesCard.css";

class AddActivityComp extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  hanldeClick = async () => {
    const data = await fetch('http://localhost:4000/addActivity', {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
        classRoomName: this.state.classRoomName,
        wvId: this.props.activity.id,
        otherInfo: this.state.otherInfo,
        img: this.props.activity.img,
        grade: this.props.activity.grade,
        name: this.props.activity.name

         })
     })
     const response = await data.json();
     response.status === "activity added"
     ? window.location.assign("./existingactivities")
     : console.log("unable to add activity")

     return
  }


  render() {
  
    
    const { activity } = this.props;

    return (
      <div className = "addActivityComp">
        <div>
          <img src={activity.img} alt="activity img" className="image" />
        </div>
        <div>
          <h1>{activity.name}</h1>
          <div className="details">
            <h2>Type: {activity.type}</h2>
            <h2>Topic: {activity.topic}</h2>
            <h2>Duration: {activity.time}</h2>
            <h2>Grade: {activity.grade}</h2>
            <h2>Activity Tags</h2>
            <div>
               <input type="text" name = "classRoomName" onChange = {this.handleChange} placeholder = "Class Name"/> 
               <input type="text" name = "otherInfo" onChange = {this.handleChange} placeholder = "Other Info"/>
            </div>
          </div>
          <button className="button" onClick = {this.hanldeClick}>Open Activity</button>
        </div>
      </div>
    );
  }
}

export default AddActivityComp;
