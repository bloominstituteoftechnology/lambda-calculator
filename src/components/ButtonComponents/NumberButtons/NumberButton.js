import React from "react";

const NumberButton = (props) => {
  console.log(props.numbers);
  return <button className="button number-button" onClick={() => props.setValue(props.numbers)}>{props.numbers}</button>;
};

export default NumberButton;