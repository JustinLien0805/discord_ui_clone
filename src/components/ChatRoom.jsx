import React from "react";
import Comment from "./Comment";
const ChatRoom = () => {
  return (
    <div className="flex-grow flex flex-col">
      {/* chat container */}
      <div className="bg-slate-600 h-screen  overflow-y-scroll">
        <div className="flex flex-col justify-start items-center">
          <input
            type="text"
            className="fixed bottom-5 h-10 w-1/2 rounded-lg shadow-lg text-gray-800 text-lg z-50 bg-slate-400"
          />
        </div>
        <div className="mb-20 flex flex-col-reverse justify-start mx-16 xl:mx-32 ">
          <Comment
            name="Guava"
            content="YT上傳要很久欸跟綠島一樣久真假那個佔18趴欸對啊是啊那一個作業佔18趴那是心得不是感想"
          />
          <Comment
            name="Guava"
            content="YT上傳要很久欸跟綠島一樣久真假那個佔18趴欸對啊是啊那一個作業佔18趴那是心得不是感想"
          />
          <Comment
            name="Guava"
            content="YT上傳要很久欸跟綠島一樣久真假那個佔18趴欸對啊是啊那一個作業佔18趴那是心得不是感想"
          />
          <Comment
            name="Guava"
            content="YT上傳要很久欸跟綠島一樣久真假那個佔18趴欸對啊是啊那一個作業佔18趴那是心得不是感想"
          />
          <Comment
            name="Guava"
            content="YT上傳要很久欸跟綠島一樣久真假那個佔18趴欸對啊是啊那一個作業佔18趴那是心得不是感想"
          />
          <Comment
            name="Guava"
            content="YT上傳要很久欸跟綠島一樣久真假那個佔18趴欸對啊是啊那一個作業佔18趴那是心得不是感想"
          />
          <Comment
            name="Guava"
            content="YT上傳要很久欸跟綠島一樣久真假那個佔18趴欸對啊是啊那一個作業佔18趴那是心得不是感想"
          />
          <Comment
            name="Guava"
            content="YT上傳要很久欸跟綠島一樣久真假那個佔18趴欸對啊是啊那一個作業佔18趴那是心得不是感想"
          />
          <Comment
            name="Guava"
            content="YT上傳要很久欸跟綠島一樣久真假那個佔18趴欸對啊是啊那一個作業佔18趴那是心得不是感想"
          />
          <Comment
            name="Guava"
            content="YT上傳要很久欸跟綠島一樣久真假那個佔18趴欸對啊是啊那一個作業佔18趴那是心得不是感想"
          />
         
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
