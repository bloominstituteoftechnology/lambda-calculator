import React from "react";

const OperatorButton = (props) => {
  return (
    <button className = "operatorButton">
      {props.operatorContent}
    </button>
  );
};

export default OperatorButton;
