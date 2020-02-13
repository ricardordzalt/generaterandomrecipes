import React from 'react';
import Platillos from './Platillos';

const Carrito = (props) => {
     const carrito =  props.products.map(info => 
        <Platillos info={info} key={info.id}/>
     );
        let x, total=0;
        for(x=0; x < props.products.length; x++){
            total+=props.products[x].price;
        }

        return(
             props.products.length > 0 ? <p>Hay {props.products.length} platillos seleccionados.
             El total es: <span className="d-block p-2 bg-primary text-white">${total}</span></p>
            : <p>No hay platillos seleccionados</p>
     );
}

    
export default Carrito;