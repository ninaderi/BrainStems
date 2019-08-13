import React from "react";

const Card = props => {
  const { name } = props;
  //console.log(props, "im in card where the activities live");

  return (
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
  );
};

export default Card;
