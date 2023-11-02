import React from "react";

function Details(props) {
  return (
    <p className="info">
      {props.phone}
      {props.email}
    </p>
  );
}
export default Details;
