import React from "react";

const NumberButton = props => {
  return (
    <button  onClick={() => props.numbers()}>
    
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.buttonValue
      
      }


    </button>
  );
};


export default NumberButton;