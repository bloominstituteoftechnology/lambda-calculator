import React from "react";

const OperatorButton = (props) => {
  return (
    <button class="op-button">
      <span>
      {props.button.value}
      </span>
      
    </button>
  );
};

export default OperatorButton;
