import React from "react";

const NumberButton = props => {

  return (
    <button className="numbers-btn" onClick={() => props.numbers()}>
   
    
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.result
     
      }


    </button>
  );
};


export default NumberButton;