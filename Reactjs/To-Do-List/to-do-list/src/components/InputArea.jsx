import React, { useState } from "react";

function InputArea(props) {
  const [value, setValue] = useState("");

  function inputText(event) {
    const newValue = event.target.value;
    setValue(newValue);
  }
  return (
    <div className="form">
      <input onChange={inputText} value={value} />
      <button
        className="btn"
        onClick={() => {
          props.addItems(value);
          setValue("");
        }}
      >
        ADD TASK
      </button>
    </div>
  );
}
export default InputArea;
