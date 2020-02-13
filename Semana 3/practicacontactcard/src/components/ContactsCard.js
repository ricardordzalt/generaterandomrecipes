import React from 'react';

const ContactsCard = (props) => (
        <div class="container">
        <div class="row">
        <div class="col-4">
        <img src={props.info.imgUrl} alt="Imagen no encontrada" width="300"></img>     
        </div>
        <div class="col-8"></div>
        <p>Nombre: {props.info.name}</p>
        <p>Telefono: {props.info.phone}</p>
        <p>Email: {props.info.email}</p>
        </div>
        </div>
    );
export default ContactsCard;