import React from "react";

const OperatorButton = (props) => {
  return (
    <button className={"button operator-button"} value={props.value} aria-label={`${props.label} key`}>
      {props.label}
    </button>
  );
};

export default OperatorButton;
