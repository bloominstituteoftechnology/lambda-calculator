import React from "react";
import { white } from "ansi-colors";

const OperatorButton = ({ operator, value }) => {
  const operatorStyle = {
    background: '#007291',
    color: white,
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button style={operatorStyle}>{operator}</button>
    </>
  );
};

export default OperatorButton;
