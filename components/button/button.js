import React from "react";

const Button = (props) => {
    return(
        <div>
            <button className='button' onClick = { props.onButtonClick } value= {props.value }>
                {props.value}
            </button>
        </div>
    )
}

export default Button;