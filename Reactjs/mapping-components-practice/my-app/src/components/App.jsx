import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
var numbers = [3, 56, 2, 48, 5];

const str = numbers.map((x) => x * 2);
console.log(str);

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((props) => (
          <Entry
            key={props.id}
            emoji={props.emoji}
            name={props.name}
            meaning={props.meaning}
          />
        ))}
        ;
      </dl>
    </div>
  );
}

export default App;
