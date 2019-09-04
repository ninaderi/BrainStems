import React from "react";
import ActivitiesCard from "./ActivitiesCard";

const ActivitiesCardList = ({ activities, handleClick }) => {

  return (
    <div className="activityScrollDiv" >
      {activities && activities.map((activity, i) => {
        return (
          <ActivitiesCard
            key={i}
            created_at ={activities[i].created_at}
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