import React from "react";
import Group from "./Group";
const Members = () => {
  return (
    <div className=" h-screen bg-gray-800 w-52 hidden md:flex md:visible md:w-40 overflow-y-scroll scrollbar-hide">
      <div >
        <Group type="Admin" />
        <Group type="online" />
        <Group type="offline" />
        <Group type="Loser" />
        <Group type="Admin" />
        <Group type="Loser" />
      </div>
    </div>
  );
};

export default Members;
