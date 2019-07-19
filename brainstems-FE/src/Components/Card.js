import React from "react";

const Card = props => {
  const { name } = props;
  console.log(props, "im in card where the activities live");

  return (
    <div className="bg-light-red dib br3 pa3 ma2 grow">
      <div>
        <img
          alt="name goes here"
          src={`https://robohash.org/${props.id}?150x150`}
        />
      </div>
      <div>
        <h2 className="activitycardname">{name}</h2>
      </div>
    </div>
  );
};

export default Card;
