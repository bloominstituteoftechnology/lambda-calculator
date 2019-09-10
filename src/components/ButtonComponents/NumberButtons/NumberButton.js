import React from "react";

const NumberButton = (props) => {
  // console.log(props)
  return (
    <>
    <button className = "number_button">
      <span role = "number" aria-label = "number">
        {props.numbers}
      </span>
    </button>
      
    </>
  );
};

export default NumberButton;

