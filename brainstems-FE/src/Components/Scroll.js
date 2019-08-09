import React from "react";

const Scroll = props => {
  // console.log(
  //   "props first",
  //   props,
  //   // "props children",
  //   props.children,
  //   "im in the scroll perhaps looking for filtered activities???"
  // );

  return (
    <div
      style={{
        overflowY: "scroll"
        // border: "5px solid black"
        // height: "800px"
      }}
    >
      {props.children}
    </div>
  );
};
export default Scroll;
