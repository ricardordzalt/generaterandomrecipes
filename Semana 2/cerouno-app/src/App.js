import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import MyInfo from './components/MyInfo';
import Paragraph from './components/Paragraph.js';
import ContactCard from './components/ContactCard.js';

function App(){
    return(
        <div>
        <Navbar/>
        <MainContent/>
        <Footer/>
        <MyInfo/>
        <Paragraph myName="Ricardo"/>
        <ContactCard name="Ricardo" imgUrl="http://placekitten.com/200/100" 
        phone="6682125525" email="ricardo.rdzalt@gmail.com"/>
        <ContactCard name="Gamez" imgUrl="http://placekitten.com/200/100" 
        phone="6682125525" email="ricardo.rdzalt@gmail.com"/>
        <ContactCard name="Carlos" imgUrl="http://placekitten.com/200/100" 
        phone="6682125525" email="ricardo.rdzalt@gmail.com"/>
        <ContactCard name="Miti" imgUrl="http://placekitten.com/200/100" 
        phone="6682125525" email="ricardo.rdzalt@gmail.com"/>
        </div>
    );
}
export default App;