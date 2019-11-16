import React from "react";
import { tsPropertySignature } from "@babel/types";



const OperatorButton = props => {

   console.log(props.operators)
  return (
    <button>
      {props.button.char}
    </button>
  );
};

export default OperatorButton;
/* Display a button element rendering the data being passed down from the parent container on props */
