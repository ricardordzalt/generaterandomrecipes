import React from 'react';
import Fecha from './Fecha';
import './style.css';

function Blog(props){
    return(
            <div className="container" className={props.estilo}>
                <div className="row border border-secondary">
                <div className="col-5 border border-info">
                <h2>{props.titulo}</h2>
                <h3>{`${props.categoria} -Categoría-`}</h3>
                <img className="img-fluid" alt="" src={props.imageUrl}  
                width="500" dev="Imagen no disponible"></img>
                </div>
                <div className="col-7 border border-light">
                <h4>{props.extracto}</h4>
                <h5>{props.autor}</h5>
                <Fecha dia={props.dia} mes={props.mes} año={props.año} />
                </div>
                </div>
            </div>
    );
}

export default Blog;