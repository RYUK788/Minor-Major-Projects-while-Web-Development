import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./Math.js";
import * as pie from "./Math.js"; //If u dont want to import modules one by one ..
import * as operations from "./Calculator.js";

ReactDOM.render(
  <div>
    <ul>
      <li>{pi}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
      <li>{pie.doublePi()}</li>
      <li>{pie.triplePi()}</li>
    </ul>
    <br></br>
    <ul>
      <li> {operations.add(1, 2)} </li>
      <li> {operations.subtract(5, 2)} </li>
      <li> {operations.multiply(3, 1)} </li>
      <li> {operations.divide(6, 2)} </li>
    </ul>
  </div>,
  document.getElementById("root")
);
