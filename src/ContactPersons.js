import React from "react";
import ContactsList from "./ContactsList";

const testNumber = "test a number - 678";
let arrayNumbers = [1, 2, 3, 4];
let mapArrayNumbers = arrayNumbers.map(num => <h5>{num}</h5>);

let contactPerson = [
  {
    id: 1,
    name: "Scott",
    phone: "1 22 333",
    hotel: "Santorini Villa"
  },
  {
    id: 2,
    name: "Santa",
    phone: "4444 55555",
    hotel: "St. Moritz Villa"
  },
  {
    id: 3,
    name: "Santo",
    phone: "6 7 8",
    hotel: "San Siro Villa"
  }
];

const personList = contactPerson.map(person => (
  <p>
    {person.name} is staying at {person.hotel}
  </p>
));

class ContactPersons extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>{personList}</li>
          <br />
          <br />
          <h4>de tre punkterna nedan visar bara olika presentationssätt</h4>
          <li>{testNumber}</li>
          <li>
            {arrayNumbers[0]} {arrayNumbers[2]} {arrayNumbers[1]}
          </li>
          <li>{mapArrayNumbers}</li>
        </ul>
      </div>
    );
  }
}

{
  /*console.log(personList); */
}
export default ContactPersons;
