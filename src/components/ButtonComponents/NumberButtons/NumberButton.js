import React from "react";

const NumberButton = (props) => {
  const buttonText = props.buttonText;
  const buttonValue = props.buttonValue;
  const appendDisplayValue = props.clickHandler; 
  return (
      /* Display a button element rendering the data being passed down from the parent container on props */
    <button className="number-button" onClick = {() => appendDisplayValue(buttonValue)}>{buttonText}</button>
  );
};

export default NumberButton;
