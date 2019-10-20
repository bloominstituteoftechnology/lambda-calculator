import React from "react";

const NumberButton = (number, onClickNumber) => {
  function fn() {
    onClickNumber(number)
  }

  return (
    <button className="button" key={number} onClick={fn}>{number}</button>
  );
};

export default NumberButton;