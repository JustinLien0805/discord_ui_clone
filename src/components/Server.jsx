import React from "react";

const Server = ({ icon }) => {
  return (
    <div className="flex group justify-items-center items-center">
      <button
        className="bg-cyan-500 rounded-full 
  m-2 h-14 w-14 text-white hover:rounded-lg hover:bg-cyan-700 font-bold text-3xl"
      >
        {icon.substring(0,1)}
      </button>
      <p className="absolute left-24 bg-black w-auto 
      text-white p-2 m-2 scale-0 group-hover:scale-100 rounded-lg">{icon}</p>
    </div>
  )
};

export default Server;
