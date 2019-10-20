import React from "react";

const OperatorButton = (char, value, onClickOperator) => {
  function onClick() {
    onClickOperator(char, value);
  }

  return (
    <button className="button operator" key={char} onClick={onClick}>{char}</button>
  );
};

export default OperatorButton;