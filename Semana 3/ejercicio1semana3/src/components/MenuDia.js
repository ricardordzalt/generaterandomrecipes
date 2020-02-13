import React from 'react';
import Platillos from './Platillos';

const MenuDia = (props) => {   
    const menuLista = props.products.map((info, idx) =>
        <Platillos info={info} key={idx} />
        );
        return(
            <div>
                {menuLista}
            </div>            
        );
    }

export default MenuDia;