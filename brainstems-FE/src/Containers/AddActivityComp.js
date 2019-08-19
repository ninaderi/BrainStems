import React from "react";
import { Activities } from "../Components/Activities";
import "../styles/activitiesCard.css";

class AddActivityComp extends React.Component {
  constructor(props) {
    super(props)
    
  }
  componentDidMount = async () => {
    let response = await fetch("http://localhost:4000/addActivity", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        activityId: 5
      })

    });
    response = await response.json()
    this.setState({ activities: response});
  }
  
  render() {
    if (!this.state) return null
    const {activity} = this.props
 
    return (
      <div>
        <div>
          <button className = "button">Back</button>
        </div>
        <div>
          <img src={activity.img} alt="activity img" className="image" />
        </div>
        <h1>{activity.name}</h1>
        <div className="details">
          <p>Type: {activity.type}</p>
          <p>Topic: {activity.topic}</p>
          <p>Duration: {activity.time}</p>
          <p>Grade: {activity.grade}</p>
          <p>Activity Tags</p>
        </div>
        <button className = "button">Open Activity</button>
      </div>
    );
  }
}

export default AddActivityComp;
