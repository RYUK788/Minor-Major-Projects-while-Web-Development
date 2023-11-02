import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.no}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Details phone={props.phone} />
        <Details email={props.email} />
      </div>
    </div>
  );
}
export default Card;
