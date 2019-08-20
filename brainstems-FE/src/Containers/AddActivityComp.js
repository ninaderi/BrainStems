import React from "react";
import { Activities } from "../Components/Activities";
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
        nameOfClass: this.state.nameOfClass,
        wvId: this.props.activity.id,
        otherInfo: this.state.otherInfo,
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
      <div>
        <div>
          <img src={activity.img} alt="activity img" className="image" />
        </div>
        <div>
          <h1>{activity.name}</h1>
          <div className="details">
            <p>Type: {activity.type}</p>
            <p>Topic: {activity.topic}</p>
            <p>Duration: {activity.time}</p>
            <p>Grade: {activity.grade}</p>
            <p>Activity Tags</p>
            <div>
              Class Name <input type="text" name = "nameOfClass" onChange = {this.handleChange}/> 
              Other Info <input type="text" name = "otherInfo" onChange = {this.handleChange}/>
            </div>
          </div>
          <button className="button" onClick = {this.hanldeClick}>Open Activity</button>
        </div>
      </div>
    );
  }
}

export default AddActivityComp;
