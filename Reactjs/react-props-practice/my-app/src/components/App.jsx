import React from "react";
import contacts from "../contacts";
import Card from "./Card";
import Avatar from "./Avatar";
function getCards(contact) {
  return (
    <Card
      key={contact.id}
      no={contact.id}
      name={contact.name}
      img={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT44b8voxSYd6pLslXcr_kYL4q1M-8H9rVlMg&usqp=CAU" />
      {contacts.map(getCards)}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
