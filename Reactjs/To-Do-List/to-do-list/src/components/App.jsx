import React, { useState } from "react";
import TodoListItem from "./TodoListItem";
import InputArea from "./InputArea";
function App() {
  const [items, setItems] = useState([]);

  function pushItems(value) {
    setItems([...items, value]);
  }

  function deleteItem(id) {
    setItems((previousValue) => {
      return previousValue.filter((items, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItems={pushItems} />
      <div>
        <ul>
          {items.map((toDoItems, index) => (
            <TodoListItem
              key={index}
              id={index}
              onCheck={deleteItem}
              itemsList={toDoItems}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
