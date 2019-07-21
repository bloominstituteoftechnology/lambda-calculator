import React from "react";
import {btnStyle} from './Operators'

const OperatorButton = props => {
function tryit (){
let x ='';
  try {
  x =  Function('"use strict";return (' + props.dispDataOB + ')')()
  }catch(error) {
  x = 'error'  
  }
return x
}
  return (
    
    <button onClick={ ()=> props.setDataOB( (props.operatorOB.char === '=')  ? 
    tryit()
     : props.dispDataOB + props.operatorOB.value) }  style={btnStyle}>{props.operatorOB.char}</button>
    // {/* Display a button element rendering the data being passed down from the parent container on props */}
);
};
export default OperatorButton;
