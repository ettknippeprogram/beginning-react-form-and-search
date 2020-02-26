import React from "react";
import ContactPersons from "./ContactPersons";

class ContactsList extends React.Component {
  constructor() {
    super();
    this.state = {
      search: " "
    };
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.search} />
        <ContactPersons />
        {/* <ContactHotells /> 
            <ContactCarRents /> 
            o s v */}
        <br />
        <p>
          <h4>några kommentarer</h4>
          Nu ligger all data som variabler ('let' eller 'const') i filen
          'Contact.js'. <br /> Som regel försöker man nästa alltid dela upp
          funktion, klass, variabler, <br /> data i ett fint antal filer. Så att
          koden/filerna/programmet blir så lättläst <br /> som möjligt.
        </p>
        <p>
          Här ligger variabler (som hårdknackad data) i samma fil som
          'Contact.js'. <br /> I 'verkligheten' placeras de helst i en egen fil
          (eller db).
        </p>
        <br />
      </div>
    );
  }
}

export default ContactsList;
