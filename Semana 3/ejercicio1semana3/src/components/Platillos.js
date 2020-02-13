import React from 'react';


const Platillos = (props) => (
<div className="card">
<img width="250" src={props.info.img} alt="Imagen no encontrada"></img>
<div className="list-group list-group-flush">
<h1 className="list-group list-group-flush"> Platillo No. {props.info.id}</h1>
<h3 className="list-group-item"> {props.info.name}</h3>
<h4 className="list-group-item"> A solo: ${props.info.price} pesos</h4>
<p className="list-group-item"> Ingredientes: {props.info.description}</p>
</div>
</div>
); 

export default Platillos;