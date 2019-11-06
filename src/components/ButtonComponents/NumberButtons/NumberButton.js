import React from "react";

const NumberButton = (props) => {
  console.log(Number(props.button));
  return (
    <button onClick={() => props.setDisplay(props.button) }>{props.button}</button>
    
    /* Display a button element rendering the data being passed down from the parent container on props */
  );
};

export default NumberButton;