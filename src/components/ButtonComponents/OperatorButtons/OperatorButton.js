import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="buttons">
      {props.symbol}
    </button>
  );
};

export default OperatorButton;
