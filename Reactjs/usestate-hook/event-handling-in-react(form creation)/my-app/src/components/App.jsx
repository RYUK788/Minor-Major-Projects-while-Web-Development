import React, { useState } from "react";

function App() {
  const inlineStyle = {
    backgroundColor: isHovering ? "black" : "white",
  };
  const [isHovering, setIsHovering] = useState(false);
  function handleMouseEnter() {
    setIsHovering(true);
  }
  function handleMouseLeave() {
    setIsHovering(false);
  }

  const [name, changeState] = useState(""); // This function Destructures the name input and provides to "text" use state . 1.
  const [text, setHeadingtext] = useState("");
  function addEvent(event) {
    setHeadingtext(name); ///getting name text from  below change state event and changing it's value based upon "event target value" 2.
    event.preventDefault();
  }

  function changeName(event) {
    changeState(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {text}</h1>
      <form onSubmit={addEvent}>
        <input
          onChange={changeName}
          type="text"
          placeholder="What's your name?"
        />

        <button
          style={inlineStyle}
          type="submit"
          onMouseOver={handleMouseEnter}
          onMouseOut={handleMouseLeave}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
