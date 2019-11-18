import React from "react";

const OperatorButton = ({ callback, operator }) => {
  return (
    <div
      className="operator"
      onClick={() => {
        callback(operator);
      }}
    >
      {operator}
    </div>
  );
};

export default OperatorButton;