import React from "react";

const OperatorButton = (props) => {
  console.log(props);
  return (
    <button onClick={() => props.addOperator(props.operator.value)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operator.char}
    </button>
  );
};

export default OperatorButton;