import React from "react";
import {btnStyle} from './Operators'

const OperatorButton = props => {
  return (
    
    <button onClick={ ()=> props.setDataOB( (props.operatorOB.char === '=')  ? eval(props.dispDataOB) : props.dispDataOB + props.operatorOB.value) }  style={btnStyle}>{props.operatorOB.char}</button>

    // {/* Display a button element rendering the data being passed down from the parent container on props */}
);
};
export default OperatorButton;

