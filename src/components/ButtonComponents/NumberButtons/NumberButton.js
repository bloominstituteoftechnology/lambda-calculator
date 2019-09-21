import React from "react";

const NumberButton = (props) => {
  return (
    <button className={"button number-button"} value={props.value} aria-label={`${props.label} key`}>
      {props.label}
    </button>
  );
};

export default NumberButton;
