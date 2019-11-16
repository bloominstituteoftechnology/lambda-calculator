import React from "react";

const OperatorButton = (props) => {
  const setOperator = props.clickHandler;
  /* Display a button element rendering the data being passed down from the parent container on props */
  return (
    <button className="operator-button" onClick = {() => setOperator(props.buttonValue)}>{props.buttonText}</button>
  );
};

export default OperatorButton;
