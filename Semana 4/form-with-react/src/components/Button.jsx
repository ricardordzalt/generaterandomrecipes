import React from 'react';

const Button = props => {
    return(
        <button 
        className="btn btn-success"
        onClick={props.action}
        >
            {props.title}
        </button>
    )
}

export default Button;