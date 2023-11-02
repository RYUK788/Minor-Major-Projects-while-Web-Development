import React from"react";
const myDate = new Date();
const inlineStyling = {
    color: "red",
    border: "black solid 2px"
     };
function Heading(){
var text;
if (myDate.getHours() < 12) {
  text = "Good Morning!";
  inlineStyling.color = "red";
} else if (myDate.getHours() >= 12 && myDate.getHours() <= 17) {
  text = "Good Afternoon!";
  inlineStyling.color = "blue";
} else if (myDate.getHours() > 17 && myDate.getHours() <= 24) {
  text = "Good Evening!";
  inlineStyling.color = "green";
} else {
  text = "I'm not sure what time it is!";
}
return <h1 className="heading" style={inlineStyling}>{text}</h1>;
}
export default Heading;