import React, {Component} from 'react';
import products from '../products';
import Platillos from './Platillos';
import Carrito from './Carrito';

class PlatillosClass extends Component{
    constructor(){
    super();
    this.state = {
        menuplatillos: products,
    };
}
render(){
    const mostrarmenu = this.state.menuplatillos.map((productos, idx) => 
    <Platillos info={productos} key={idx}/>
    );
    return(
        <>
        {mostrarmenu}
        </>
    )
}
}

export default PlatillosClass;