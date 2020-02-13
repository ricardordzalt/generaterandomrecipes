
import React from 'react';
import products from './products';
import Carrito from './components/Carrito';
import PlatillosClass from './components/PlatillosClass';
import style from './css/style.css';

const App = () => {
  const carritoItems = [products[0], products[1], products[2]];
  return(
    <div className="container"> 
      <div className="row">
        <div className="col-4 card">
        <PlatillosClass menuplatillos={products} className="card-text"/>
        </div>
        <div className="col-4"></div>
        <div className="col-4">
          <Carrito products={carritoItems}/>
        </div>
      </div>
    </div>
  );
}

export default App;