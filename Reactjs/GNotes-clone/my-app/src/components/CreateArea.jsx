import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState({ title: "", content: "" });

  function currentInput(event) {
    const { name, value } = event.target;
    setInput((newValue) => {
      return {
        ...newValue,
        [name]: value,
      };
    });
  }
  function handleEvent(event) {
    {
      props.addNote(input);
    }
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={currentInput}
          name="title"
          placeholder="Title"
          value={input.title}
        />
        <textarea
          onChange={currentInput}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={input.content}
        />
        <button onClick={handleEvent}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
