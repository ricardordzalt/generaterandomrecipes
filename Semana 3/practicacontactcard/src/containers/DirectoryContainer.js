import React, { Component } from "react";
import contactsData from "../components/contactsData";
import ContactsCard from "../components/ContactsCard";
import Button from '../components/Button';
import Input from '../components/Input';

const INITIAL_STATE = contactsData
class DirectoryContainer extends Component {
    state = {
      contacts: INITIAL_STATE,
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
            imgUrl: '',
            phone: '',
            email: ''
        }
    }
    ));
  }

  handleClearForm = (e) =>{
    e.preventDefault();
   this.setState({
    catsSaved: {
           name: '',
           imgUrl: '',
           phone: '',
           email: ''
  }
}
);
}

  handleName = (e) =>{
    let value = e.target.value;
    this.setState(
        prevState =>({
          catsSaved: {
                    ...prevState.catsSaved,
                    name: value
                }
            }
        )
    );
}

handleImgUrl = (e) =>{
  let value = e.target.value;
  this.setState(
      prevState =>({
        catsSaved: {
                  ...prevState.catsSaved,
                  imgUrl: value
              }
          }
      )
  );
}

handlePhone = (e) =>{
  let value = e.target.value;
  this.setState(
      prevState =>({
        catsSaved: {
                  ...prevState.catsSaved,
                  phone: value
              }
          }
      )
  );
}

handleEmail = (e) =>{
  let value = e.target.value;
  this.setState(
      prevState =>({
        catsSaved: {
                  ...prevState.catsSaved,
                  email: value
              }
          }
      )
  );
}

  render() {
    const showinfo = this.state.contacts.map((info, idx) => (
      <ContactsCard info={info} key={idx} />
    ));

    return (
      <div className="container">
        <div className="row">
        <div className="col-6">
        {showinfo}  
        {this.state.contacts.length === 0 ? (
          <p>No hay gatitos disponibles</p>
        ) : (
          <></>
        )}
         </div>
         <div className="col-6">
           <form>
                 <Input
                    name="name"
                    type="text"
                    value={this.state.catsSaved.name}
                    placeHolder="Ingresa el nombre del gatito"
                    handleChange={this.handleName}
                  />
                  <Input
                     name="name"
                     type="text"
                     value={this.state.catsSaved.imgUrl}
                     placeHolder="Ingresa la url de la imagen"
                     handleChange={this.handleImgUrl}
                   />
                   <Input
                      name="name"
                      type="text"
                      value={this.state.catsSaved.phone}
                      placeHolder="Ingresa un teléfono"
                      handleChange={this.handlePhone}
                    />
                    <Input
                       name="name"
                       type="text"
                       value={this.state.catsSaved.email}
                       placeHolder="Ingresa un correo"
                       handleChange={this.handleEmail}
                     />
                     <Button 
                         action={this.handleFormSubmit}
                         title="Agregar gatito"
                      />
                      <Button 
                          action={this.handleClearForm}
                          title="Borrar información"
                       />
                      </form>
         </div>
        </div>
      </div>
    );
  }
}


export default DirectoryContainer;
