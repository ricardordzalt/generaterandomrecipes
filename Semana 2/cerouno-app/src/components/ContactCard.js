import React from 'react';

function ContactCard(props){
    return(
        <div>
        <p>Nombre: {props.name}</p>
        <img src={props.imgUrl} alt="Imagen no encontrada"></img>
        <p>Telefono: {props.phone}</p>
        <p>Email: {props.email}</p>
        </div>
    );
}
export default ContactCard;