import React from "react";

const NumberButton = props => {
  console.log(props)
  return (
    <button className="numbers_button">{props.stringOfOneNumber}
    </button>
  );
};

export default NumberButton;
