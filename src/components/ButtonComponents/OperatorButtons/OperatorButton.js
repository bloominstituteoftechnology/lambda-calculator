import React from "react";

const OperatorButton = props => {
  return <button className="btn operator-btn">{props.operators.value}</button>;
};

export default OperatorButton;
