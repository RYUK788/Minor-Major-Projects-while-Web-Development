import React from "react";
import Login from "./Login";

var isLoggedin = true;

function App() {
  return (
    <div className="container">{isLoggedin ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;
