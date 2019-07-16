import React from "react";

const OperatorButton = (props) => {
  const {buttonContent} = props;
  return (
    <button className="operButton">{buttonContent}</button>
  );
};
export default OperatorButton;
