import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <video src="http://localhost:5000/video_feed" autoPlay={true} />
      </div>
    </div>
  );
}

export default App;
