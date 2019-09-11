import React from "react";
const NumberButton = props => {
  return (
    <>
      <button className={props.value === "0" ? "zero-button" : "number-button"}>
        {props.value}
      </button>
    </>
  );
};

export default NumberButton;