import React from "react";
import Comment from "./Comment";
const ChatRoom = () => {
  return (
    <div className="flex-grow flex flex-col">
      {/* chat container */}
      <div className="bg-black h-screen  overflow-y-scroll scrollbar-thumb-neutral-500 scrollbar-track-black scrollbar-thin ">
        <div className="flex flex-col justify-start items-center ">
          <input
            type="text"
            className="fixed bottom-5 h-10 w-1/2 rounded-lg shadow-lg text-gray-800 text-lg z-50 bg-slate-400"
          />
        </div>
        <div className="mb-20 flex flex-col-reverse justify-start mx-16 xl:mx-32 ">
          <Comment
            name="Guava"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Comment
            name="Guava"
            content="loremipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Comment
            name="Guava"
            content="loremipsum dolor sit amet, consectetur adipis"
          />
          <Comment
            name="Guava"
            content="loremipsum dolor sit amet, consectetur adipis"
          />
          <Comment
            name="Guava"
            content="loremipsum dolor sit amet, consectetur adipis"
          />
          <Comment
            name="Guava"
            content="loremipsum dolor sit amet, consectetur adipis"
          />
          <Comment
            name="Guava"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Comment
            name="Guava"
            content="loremipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Comment
            name="Guava"
            content="lorem Ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Comment
            name="Guava"
            content="loremipsum dolor sit amet, consectetur adipis"
          />
          <Comment
            name="Guava"
            content="lorem Ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Comment
            name="Guava"
            content="loremipsum dolor sit amet, consectetur adipis"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
