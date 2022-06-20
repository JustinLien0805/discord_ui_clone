import { useState } from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Channels from "./components/Channels";

function App() {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />
      <main>
        <Channels />
        {/* channels */}
        {/* chat room */}
        {/* members */}
      </main>
    </div>
  );
}

export default App;
