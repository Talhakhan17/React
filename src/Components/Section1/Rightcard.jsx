// import React from "react";
import RightCardContent from "./RightCardContent";
const Rightcard = (props) => {
  return (
    <div className="h-full w-80 relative rounded-2xl  shrink-0  ">
      <img
        className="h-full object-cover w-full rounded-3xl"
        src={props.img}
        alt=""
      />
      <RightCardContent tag={props.tag} id ={props.id} />
    </div>
  );
};

export default Rightcard;
