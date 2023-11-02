import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function addCount() {
    setCount(count + 1);
  }
  function minusCount() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={addCount}>+</button>
      <button onClick={minusCount}>-</button>
    </div>
  );
}

export default App;
