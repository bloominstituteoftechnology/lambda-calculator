import React from "react";
import Numbers from "./Numbers";

const NumberButton = (props) => {
  return (
    <>
      <button className="number_button">
        <span role="number" arial-label="number">
          {props.numbers}
        </span>
        <button className="number_button"></button>
        <span role="number" aria-label="number">{props.numbers}</span>
      </button>
      <Numbers />
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;
