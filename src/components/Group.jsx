import React from "react";
import Member from "./Member";
const Group = ({ type }) => {
  return (
    <div className="flex flex-col justify-start items-start w-full ml-2 ">
      <h3 className="text-violet-400 font-bold text-lg ">{type}</h3>
      <Member name="Justin"/>
      <Member name="Xavick"/>
      <Member name="Guava"/>
      <Member name="huan"/>
    </div>
  );
};

export default Group;
