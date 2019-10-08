import React from "react";

const OperatorButton = (props) => {
  return (
    <button  onClick={() => props.operators()}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      
      props.buttonValue}
    </button>
  );
};


export default OperatorButton;