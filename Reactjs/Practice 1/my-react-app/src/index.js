import React from "react";
import ReactDOM from "react-dom";
// import Heading from "./components/Heading";
import List from "./components/List";
import App from "./components/App";
const name = "kaalia";
let dateObj = new Date();
let date = dateObj.getFullYear();
const randompics = "https://picsum.photos/200";
const InlineStyling = {
  color: "blue",
  border: "2px solid black ",
};
InlineStyling.color = "red"; // Can edit inline styling whenever We want to edit it .
ReactDOM.render(
  <div>
    <h1 className="heading" style={InlineStyling}>
      Content Editable or not
    </h1>
    <App />
    {/* <Heading />  Comonent of react. */}
    <p>Unorder Lists as a component.</p>
    <List /> {/*Component of React. */}
    <p>Unordered List example : </p>
    <ul>
      <li>bacon</li>
      <li>Apple</li>
    </ul>
    <div>
      <img src={randompics + "?grayscale"} alt="random-images" />
    </div>
    <h1>Created by {name},</h1>
    <h3>Copyright {date}.</h3>
  </div>,
  document.getElementById("root")
);
