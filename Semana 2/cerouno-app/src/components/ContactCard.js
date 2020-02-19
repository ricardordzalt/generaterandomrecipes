import React from 'react';

const ContactCard = (props) => (
        <div>
        <p>Nombre: {props.info.name}</p>
        <img src={props.info.imgUrl} alt="Imagen no encontrada"></img>
        <p>Telefono: {props.info.phone}</p>
        <p>Email: {props.info.email}</p>
        </div>
    );
export default ContactCard;