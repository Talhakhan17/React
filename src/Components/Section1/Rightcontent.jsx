// import React from 'react'
// import Arrow from "./Arrow";
// import Herotext from "./Herotext";
import Rightcard from "./Rightcard";
const Rightcontent = (props) => {
  console.log(props.users);
  return (
    <div className="h-full w-2/3 overflow-x-auto flex flex-nowrap gap-10 overflow-x-auto-auto font-poppins scrollbar-hide p-6 mb-10">
      {props.users.map(function (elem ,idx ,id ) {
        return <Rightcard key={idx}  id = {id}  img ={elem.img}  tag = {elem.tag}/>
      })}
    </div>
  );
};

export default Rightcontent;
