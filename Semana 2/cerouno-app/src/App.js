import React, {Component} from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Paragraph from './components/Paragraph.js';
import ContactCard from './components/ContactCard.js';
import ContactsData from './components/ContactsData';

class App extends Component{
    constructor(){
    super()
    this.state = {
        contactos: ContactsData
    }
render(){
    const cards = ContactsData.map((contactos, idx) =>
    <ContactsData info={contactos} key={idx} />
    );
    return(
        <>
        {cards.lenght > 0 &&
        cards
        }
        </>
    );
}
}
}
export default App;
