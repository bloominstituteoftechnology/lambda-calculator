import React from "react"; 
import { tsPropertySignature } from "@babel/types";

const NumberButton = (props) => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.num
      }
    </button>
  );
};

export default NumberButton;