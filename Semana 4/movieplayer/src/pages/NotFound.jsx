import React from 'react';
import Button from '../components/Button';

const NotFound = (props) => {
    const goHome = () => {
        props.history.push('/');
    }
    const goBack = () => {
        props.history.goBack();
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <img height="400" src="../NotFound.jpg" alt="No se pudo cargar la imagen"/>
                </div>
                <div className="col-3">
                    <br/><br/><br/>
                    <Button title="Volver a la página principal" action={goHome}/>
                    <br/>
                    <Button title="Volver hacia atrás" action={goBack}/>
                </div>
            </div>
        </div>
    );
}

export default NotFound;