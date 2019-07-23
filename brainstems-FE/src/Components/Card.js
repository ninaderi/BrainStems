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
          src={`https://robohash.org/${props.id}`}
        />
      </div>
      <div>
        <h2 className="activitycardname">{name}</h2>
      </div>
    </div>
  );
};

export default Card;
