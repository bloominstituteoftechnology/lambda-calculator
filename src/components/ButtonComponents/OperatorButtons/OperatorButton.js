import React from "react";

const OperatorButton = props => {
  return (
    <button className="button">
      {props.operator.char}
    </button>
  );
};

export default OperatorButton;