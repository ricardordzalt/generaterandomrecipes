import React, { Component } from "react";
//import contactsData from "../components/contactsData";
import ContactsCard from "../components/ContactsCard";
import Button from '../components/Button';
import Input from '../components/Input';

class DirectoryContainer extends Component {
    state = {
      contacts: [],
    catsSaved: [{
      name: '',
      imgUrl: '',
      phone: '',
      email: ''
    }]
    };

  handleFormSubmit = (e) =>{
    e.preventDefault();
    let userData = this.state.catsSaved;
    this.setState(prevState => (
        {
          contacts: [
            ...prevState.contacts,
            userData
        ],
        catsSaved: {
            name: '',
            phone: '',
            email: '',
            website: ''
        }
    }
    ));
  }

  handleClearForm = (e) =>{
    e.preventDefault();
   this.setState({
    catsSaved: {
           name: '',
           phone: '',
           email: '',
           website: ''
  }
}
);
this.props.history.push('/');
}
showInfoApi = (e) => {
  e.preventDefault();
   const url= 'https://jsonplaceholder.typicode.com/users';fetch(url)
  .then(response => response.json())
  .then(data => {
      console.log(data);
      this.setState({
        contacts: data
      });
  }); 
}

handleInput = (e) => {
  let value = e.target.value;
  let name = e.target.name;
  this.setState(
      prevState =>({
        catsSaved:{
          ...prevState.catsSaved,
          [name]: value,
          }
      })
  );
}

  render() {
    const showinfo = this.state.contacts.map((info, idx) => (
      <ContactsCard info={info} key={idx} />
    ));

    return (
      <div className="container">
        <div className="row">
        <div className="col-8">
        {showinfo}  
        {this.state.contacts.length === 0 ? (
          <p>No hay gatitos disponibles</p>
        ) : (
          <></>
        )}
         </div>
         <div className="col-4">
           <form>
                 <Input
                    name="name"
                    type="text"
                    value={this.state.catsSaved.name}
                    placeHolder="Ingresa el nombre del contacto"
                    handleChange={this.handleInput}
                  />
                  <Input
                     name="phone"
                     type="text"
                     value={this.state.catsSaved.phone}
                     placeHolder="Ingresa el teléfono"
                     handleChange={this.handleInput}
                   />
                   <Input
                      name="email"
                      type="text"
                      value={this.state.catsSaved.email}
                      placeHolder="Ingresa un correo electrónico"
                      handleChange={this.handleInput}
                    />
                    <Input
                       name="website"
                       type="text"
                       value={this.state.catsSaved.website}
                       placeHolder="Ingresa un sitio web"
                       handleChange={this.handleInput}
                     />
                     <Button 
                         action={this.handleFormSubmit}
                         title="Agregar contacto"
                      />
                      <Button 
                          action={this.handleClearForm}
                          title="Borrar información"
                       />
                       <Button 
                           action={this.showInfoApi}
                           title="Agregar información de contactos"
                        />
                      </form>
         </div>
        </div>
      </div>
    );
  }
}


export default DirectoryContainer;
