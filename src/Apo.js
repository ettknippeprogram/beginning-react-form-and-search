import React from "react";
import "./App.css";
import ReactLogo from "./ReactLogo";
import ContactsList from "./ContactsList";

let contacts = {
  name: "Scott",
  phone: "123 456 7",
  birthday: "in may"
};

class Apo extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <ContactsList contacts={this.props.con} />
        <ReactLogo />
      </div>
    );
  }
}

export default Apo;
