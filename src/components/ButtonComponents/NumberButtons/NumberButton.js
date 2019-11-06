import React from "react";

const NumberButton = props => {
  const { number, class0 } = props;
  return <button className={class0}>{number}</button>;
};

export default NumberButton;
