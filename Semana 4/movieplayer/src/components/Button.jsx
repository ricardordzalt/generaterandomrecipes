import React from 'react';

const Button = props => {
    return(
        <div>
        <button className="btn btn-success" onClick={props.action}>{props.title}</button>
        <br/><br/>
        </div>
    )
}

export default Button;