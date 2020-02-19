import React, {Component} from 'react';
import Input from '../components/Input';
import PreviewData from '../components/PreviewData';    
import Button from '../components/Button';

const INITIAL_STATE = [
    {
        name: 'Richie Valens',
        age: '26 pero me veo de 20',
    }
];

class FormContainer extends Component{
            state = {
            newUser: {
                name: '',
                age: '',
                username: ''
            },
            usersSaved: INITIAL_STATE
        }
    
    componentDidMount(){
        const url= 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                usersSaved: data
            });
        });         
        }



    handleInput = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState =>({
                newUser:{
                ...prevState.newUser,
                [name]: value,
                }
            })
        );
    }


    handleFormSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state.newUser);
        let userData = this.state.newUser;
        this.setState(prevState => (
            {
            usersSaved: [
                ...prevState.usersSaved,
                userData
            ],
            newUser: {
                name: '',
                age: '',
                username: ''
            }
        }
        ));
    }

         handleClearForm = (e) => {
             e.preventDefault();
            this.setState({
                newUser: {
                    name: '',
                    age: '',
                    username: ''
                }
              }
           );
       }
     
    render(){
        return(
            <div className="row">
                <div className="col-8">
                <p>Formulario React JS</p>
                <form>
                <Input
                    name="name"
                    type="text"
                    value={this.state.newUser.name}
                    placeHolder="Ingresa tu nombre"
                    handleChange={this.handleInput}
                 />
                 <Input
                    name="age"
                    type="text"
                    value={this.state.newUser.age}
                    placeHolder="Ingresa tu edad"
                    handleChange={this.handleInput}
                  />
                  <Input
                     name="username"
                     type="text"
                     value={this.state.newUser.username}
                     placeHolder="Ingresa tu user name"
                     handleChange={this.handleInput}
                   />
                  <Button 
                      action={this.handleFormSubmit}
                      title="Enviar"
                   />
                   <Button 
                       action={this.handleClearForm}
                       title="Borrar Datos"
                    />
             </form>
              </div>
                 <PreviewData data={this.state.usersSaved}/>
             </div>
        );
    }
}
export default FormContainer;