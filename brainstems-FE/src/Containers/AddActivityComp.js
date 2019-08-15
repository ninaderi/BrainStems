import React from "react";
import { Activities } from "../Components/Activities";
import "../styles/activitiesCard.css";

class AddActivityComp extends React.Component {
  render() {
    console.log(Activities);
    return (
      <div>
        <div>
          <button className = "button">Back</button>
        </div>
        <div>
          <img src={Activities[5].img} alt="activity img" className="image" />
        </div>
        <h1>{Activities[5].name}</h1>
        <div className="details">
          <p>Type: {Activities[5].type}</p>
          <p>Topic: {Activities[5].topic}</p>
          <p>Duration: {Activities[5].time}</p>
          <p>Grade: {Activities[5].grade}</p>
          <p>Activity Tags</p>
        </div>
        <button className = "button">Open Activity</button>
      </div>
    );
  }
}

export default AddActivityComp;
