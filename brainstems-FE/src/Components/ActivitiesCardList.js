import React from "react";
import ActivitiesCard from "./ActivitiesCard";

const ActivitiesCardList = ({ activities, handleClick }) => {

    console.log(activities)
  return (
    <div className="activityScrollDiv" >
      {activities && activities.map((activity, i) => {
          console.log(activity)
        return (
          <ActivitiesCard
            key={i}
            dateCreated ={activities[i].created_at}
            classRoomName={activities[i].classRoomName}
            expiry={activities[i].expiry}
            grade={activities[i].grade}
            img={activities[i].img}
            activityCode = {activities[i].activityCode}
            handleClick = {handleClick}
          />
        );
      })}
    </div>
  );
};

export default ActivitiesCardList;