import React from "react";

const OperatorButton = (props) => {
  return (
    <button className = "operator-button" onClick ={
      () => props.addOperator(props.operatorText.value)
    }>
      {props.operatorText.value}
    </button>
  );
};

export default OperatorButton;