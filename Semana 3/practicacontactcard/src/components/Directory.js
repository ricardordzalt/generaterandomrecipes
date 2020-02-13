import React, {Component} from 'react';
import contactsData from './contactsData';
import ContactsCard from './ContactsCard';

class Directory extends Component{
constructor(){
  super();
  this.state = {
    contacts: contactsData
  };
}
render(){
    const showinfo = this.state.contacts.map((info, idx) => (
        <ContactsCard info={info} key={idx}/>
    )
    );
        return(
        <>
        {showinfo}
        </>
    );
}
}
  
export default Directory;