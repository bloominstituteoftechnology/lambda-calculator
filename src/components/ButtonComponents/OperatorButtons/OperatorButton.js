import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      <button className="operator_button">
        <span role = "operator symbol" aria-label = "operator symbol">
        {props.operators.char}
        </span>
      </button>
    </>
  )
};


export default OperatorButton;