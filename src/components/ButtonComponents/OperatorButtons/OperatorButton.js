import React, {useState} from "react";
//import {OperatorButton} from '../OperatorButtons';
//import {OperatorButton} from '../../../data';
//import { tsPropertySignature } from "@babel/types";

const OperatorButton = (props) => {
  console.log(props);
  return (
    <div className = "button-container">
    <button className='button'>

    <span>{props.button}</span>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  
  </div>
  );
};

export default OperatorButton;