import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function getContact(event) {
    const { name, value } = event.target;

    setContact((lastvalue) => {
      return {
        ...lastvalue, //Using Spread Operator to destructure the input array objects containing name and value.
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={getContact} name="fName" placeholder="First Name" />
        <input onChange={getContact} name="lName" placeholder="Last Name" />
        <input onChange={getContact} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
