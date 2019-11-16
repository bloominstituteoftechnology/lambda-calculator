import React from "react";

const OperatorButton = ({ operator }) => {
  return(
  <div className="btn btn-op">
    <button>{operator.char}</button>
  </div>
  )
};

export default OperatorButton;
