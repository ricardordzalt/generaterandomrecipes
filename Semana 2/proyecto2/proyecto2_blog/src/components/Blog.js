import React from 'react';
import Fecha from './Fecha';

function Blog(props){
    return(
            <div>
                <h1>{props.titulo}</h1>
                <h3>{props.categoria}</h3>
                <img src={props.imageUrl} dev="Imagen no disponible"></img>
                <h4>{props.extracto}</h4>
                <h6>{props.autor}</h6>
                <Fecha dia={props.dia} mes={props.mes} año={props.año} />

            </div>

    );
}

export default Blog;