import React, {useState} from "react";
import {OperatorButton} from '../OperatorButtons';
//import {OperatorButton} from '../../../data';
import { tsPropertySignature } from "@babel/types";

//const OperatorButton = props => {
  console.log(props);
  return (
    <button>
    <span>{props.button.value}</span>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );

//export OperatorButton;