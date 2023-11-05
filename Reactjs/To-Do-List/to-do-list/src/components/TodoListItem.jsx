import React, { useState } from "react";

function TodoListItem(props) {
  // const [done, setDone] = useState(false);
  // const inlineStyle = {
  //   textDecoration: done ? "line-through" : "none",
  // };

  return (
    <div
      /*style={inlineStyle} */ onClick={() => {
        {
          props.onCheck(props.id);
        }
      }}
    >
      <li> {props.itemsList}</li>
    </div>
  );
}
export default TodoListItem;
