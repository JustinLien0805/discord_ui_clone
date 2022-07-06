import React from "react";
import Comment from "./Comment";
const ChatRoom = () => {
  return (
    <div className="flex-grow flex flex-col">
      {/* chat container */}
      <div className="bg-neutral-800 h-screen  overflow-y-scroll scrollbar-thumb-neutral-500 scrollbar-track-black scrollbar-thin ">
        <div className="bg-neutral-700 sm:hidden h-16 sticky flex items-center top-0 outline-2 outline-neutral-900 px-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white mr-auto sm:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white sm:hidden"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
        </div>
        <div className="flex flex-col justify-start items-center ">
          <input
            type="text"
            className="fixed bottom-5 h-10 sm:w-1/2 w-2/3 rounded-lg shadow-lg text-gray-800 text-lg z-50 bg-slate-400"
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
