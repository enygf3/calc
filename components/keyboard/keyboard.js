import React from "react";
import Button from "../button";

const Keyboard = (props) => {
        return(
                <div>
                    <p className='display'>
                        { props.oldNumber }
                        { (props.operator) }
                        { (props.newNumber != 0) ? props.newNumber : "" }
                    </p>
                    <div className='keyboard'>
                        <Button value = "=" onButtonClick = { props.onButtonClick }></Button>
                        <Button value = "+" onButtonClick = { props.onButtonClick }></Button>
                        <Button value = "-" onButtonClick = { props.onButtonClick }></Button>
                        <Button value = "/" onButtonClick = { props.onButtonClick }></Button>
                        <Button value = "*" onButtonClick = { props.onButtonClick }></Button>
                        <Button value = "C" onButtonClick = { props.onButtonClick }></Button>
                        <Button value = "1" onButtonClick = { props.onButtonClick }></Button>
                        <Button value = "2" onButtonClick = { props.onButtonClick }></Button>
                        <Button value = "3" onButtonClick = { props.onButtonClick }></Button>
                        <Button value = "4" onButtonClick = { props.onButtonClick }></Button>
                        <Button value = "5" onButtonClick = { props.onButtonClick }></Button>
                        <Button value = "6" onButtonClick = { props.onButtonClick }></Button>
                        <Button value = "7" onButtonClick = { props.onButtonClick }></Button>
                        <Button value = "8" onButtonClick = { props.onButtonClick }></Button>
                        <Button value = "9" onButtonClick = { props.onButtonClick }></Button>
                        <Button value = "0" onButtonClick = { props.onButtonClick }></Button>

            </div>
                </div>
        )
}

export default Keyboard;