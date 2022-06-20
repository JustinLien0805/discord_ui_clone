import { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Members from "./components/Members";
import Channels from "./components/Channels";
import ChatRoom from "./components/ChatRoom";
function App() {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />
      <main className="flex w-full"> 
        <Channels />
        <ChatRoom />
        <Members />
      </main>
    </div>
  );
}

export default App;
