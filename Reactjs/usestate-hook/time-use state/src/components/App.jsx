import React from "react";
import { useState } from "react";

function App() {
  const currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);
  function Time() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  function sayHi() {
    Time();
  }
  setInterval(sayHi, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={Time}>Get Time</button>
    </div>
  );
}

export default App;
