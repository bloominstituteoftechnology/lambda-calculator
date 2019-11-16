import React from "react";

const NumberButton = props => {
  console.log(props.numbers);
  return <button className="btn number-btn">{props.numbers}</button>;
};

export default NumberButton;
