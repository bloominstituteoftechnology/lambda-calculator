import React, {useState} from "react";
//import {NumberButton} from '../../../data';
//import {NumberButton} from '../NumberButton';
//import { tsPropertySignature } from "@babel/types";

const NumberButton = (props) => {
 console.log(props);

  return (
    <div className='button-container'>
    <button className ="button">
   <span>{props.button}</span>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      </button>
      
      </div>
    );
    };
export default NumberButton;