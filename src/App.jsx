import { useState } from "react";
import Sidebar from './components/Sidebar'
import "./App.css";

function App() {
  return (
    <div className="flex overflow-hidden">
      {/* header */}
      <Sidebar />
      <main>
        {/* channels */}
        {/* chat room */}
        {/* members */}
      </main>
    </div>
  );
}

export default App;
