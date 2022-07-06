import React from "react";
import Group from "./Group";
const Members = () => {
  return (
    <div
      className=" h-screen bg-neutral-700 w-52 hidden md:flex md:visible md:w-40 xl:w-52
     overflow-y-scroll scrollbar-hide"
    >
      <div>
        <Group type="Admin" />
        <Group type="online" />
        <Group type="offline" />
      </div>
    </div>
  );
};

export default Members;
