import React from 'react';

const LoginComponent = (props) =>{
    const handleInput = (e) => {
        e.preventDefault();
    }
    const goDirectory = () =>{
        props.history.push('/Directory/');
    }
    return(
        <div>
            <input onChange={handleInput} type="text" className="form-control" name="name" value="" placeHolder="Ingresa el usuario"/>
            <input onChange={handleInput} type="text" className="form-control" name="password" value="" placeHolder="Ingresa la contraseña"/>
            <button className="btn btn-success" onClick={goDirectory}>Log in</button>
        </div>
    );
}

export default LoginComponent;