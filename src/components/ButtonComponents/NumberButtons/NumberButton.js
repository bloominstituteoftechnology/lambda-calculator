import React from "react";

const NumberButton = (props) => {
  const {buttonContent} = props;
  return (
    <button className="numButton">{buttonContent}</button>
  );
};

export default NumberButton;
