import React from "react";
import Server from "./Server";
const Sidebar = () => {
  return (
    <div className="sm:flex flex-col p-2 bg-neutral-800 h-screen overflow-y-scroll scrollbar-hide hidden">
      <div className="border-violet-400 border-b-4">
        <Server icon="Home" />
      </div>
      <Server icon="Apex" />
      <Server icon="LOL" />
      <Server icon="COD" />
      <Server icon="OW" />
      <Server icon="LOL" />
      <Server icon="Apex" />
      <Server icon="LOL" />
      <Server icon="LOL" />
      <Server icon="LOL" />
      <Server icon="LOL" />
      <Server icon="Apex" />
      <Server icon="LOL" />
      <Server icon="LOL" />
      <Server icon="LOL" />
      <Server icon="LOL" />
    </div>
  );
};

export default Sidebar;
