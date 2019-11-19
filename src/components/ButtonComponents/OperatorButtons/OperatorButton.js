import React from "react";

const OperatorButton =props=>{
  return (
    <button className ="operations_button">
      {props.char}
    </button>
    
  );
};

export default OperatorButton;