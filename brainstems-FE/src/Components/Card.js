import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
  const { name } = props;

  //console.log(props, "im in card where the activities live");

  return (
    <div onClick = {() => props.handleClick(props.activityId)}>
      <div className="card">
        <div>
          <img
            className="cardimage"
            alt="name goes here"
            src={`${props.img}`}
          />
        </div>
        <div>
          <h2 className="activityCardName">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
