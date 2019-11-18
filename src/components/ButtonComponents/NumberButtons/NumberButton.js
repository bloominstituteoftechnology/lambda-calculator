import React from "react";

const NumberButton = (props) => {
  return (
  <button className = "number-button" onClick = {
    () => props.addNumber(props.buttonText)
    }>
    {props.buttonText}
  </button>
  );
};

export default NumberButton;