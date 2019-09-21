import React from "react";

const OperatorButton = (props) => {
  return (
    <button
    onClick={() => props.setOperatorState(props.buttonOperatorData.char)}
    >
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <span>{props.buttonOperatorData.value}</span>
    </button>
  );
};
