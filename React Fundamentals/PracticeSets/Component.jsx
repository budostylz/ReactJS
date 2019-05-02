import React from "react";
import ReactDOM from "react-dom";

class ContactList extends React.Component{
  render(){
    const people = [
      { name: 'Tyler'},
      { name: 'Karen'},
      { name: 'Richard'}
    ]

    return <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

ReactDOM.render(
  <ContactList />, 
  document.getElementById("root")
);
