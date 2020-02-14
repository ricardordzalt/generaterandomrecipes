import React, { Component } from "react";
import contactsData from "./contactsData";
import ContactsCard from "./ContactsCard";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    };
    this.sayHi = this.sayHi.bind(this);
  }
  sayHi = () => {
    this.setState({
      contacts: contactsData
    });
  };
  borrar = () => {
    this.setState({
      contacts: []
    });
  };
  render() {
    const showinfo = this.state.contacts.map((info, idx) => (
      <ContactsCard info={info} key={idx} />
    ));

    return (
      <div>
        <button className="btn btn-primary" onClick={this.sayHi}>
          <p>Este botón agregará los contactos al directorio</p>
        </button>
        {showinfo}
        <button className="btn btn-primary" onClick={this.borrar}>
          <p>Borrar</p>
        </button>        
        {this.state.contacts.length === 0 ? (
          <p>No hay gatitos disponibles</p>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default Directory;
