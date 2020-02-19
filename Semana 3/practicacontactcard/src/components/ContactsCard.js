import React from 'react';

const ContactsCard = (props) => (
        <div className="container">
        <div className="row">
        <div className="col-4">
        </div>
        <div className="col-8"></div>
        <p>Nombre: {props.info.name}</p>
        <p>Telefono: {props.info.phone}</p>
        <p>Email: {props.info.email}</p>
        <p>WebSite: {props.info.website}</p>
        </div>
        </div>
        );
export default ContactsCard;