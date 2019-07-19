import React from "react";
import Card from "./Card";

const CardList = ({ activities }) => {
  return (
    <div>
      {activities.map((user, i) => {
        return (
          <Card
            key={i}
            name={activities[i].name}
            topic={activities[i].topic}
            keyword={activities[i].keyword}
            time={activities[i].time}
            grade={activities[i].grade}
            type={activities[i].type}
            img={activities[i].img}
          />
        );
      })}
    </div>
  );
};

export default CardList;
