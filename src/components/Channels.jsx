import React from "react";
import Channel from "./Channel";

const Channels = () => {
  return (
    <>
      <div
        className="bg-gray-800 text-white h-screen 
            w-48 xl:w-60  overflow-y-scroll scrollbar-hide"
      >
        <div className="flex justify-center items-center sticky top-0 h-12 bg-gray-800">
          <h3 className="font-bold text-xl text-violet-300">Apex</h3>
        </div>
        <hr className="border-t-[2px] border-gray-900" />
        <div className="m-2">
          <h3 className="font-bold text-lg">Text Channels</h3>
          <div className="m-4 ml-0">
            <Channel name="normal" type="text" />
            <Channel name="study" type="text" />
            <Channel name="music" type="text" />
          </div>
        </div>
        <div className="m-2">
          <h3 className="font-bold text-lg">Voice Channels</h3>
          <div className="m-4 ml-0">
            <Channel name="apex" type="voice" />
            <Channel name="casual" type="voice" />
            <Channel name="rank" type="voice" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Channels;
