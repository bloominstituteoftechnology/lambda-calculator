import React from "react";

const NumberButton = (props) => {
  return (
    <button class="number-btn" onClick={() => props.addNumber(props.button)}>
      {props.button}
    </button>
  );
};

export default NumberButton;
