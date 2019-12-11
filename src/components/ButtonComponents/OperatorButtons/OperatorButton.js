import React from "react";

const OperatorButton = (props) => {
  return (
    <button onClick = {() => props.addOperator(props.operator.value)}>
      {props.operator.char}
    </button>
  );
};

export default OperatorButton;