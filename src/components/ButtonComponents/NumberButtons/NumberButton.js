import React from "react";

const NumberButton = props => {
  return (
    <button className = "numbers_button">
      {props.numberString}
    </button>
  );
};

export default NumberButton;


/* Display a button element rendering the data being passed down from the parent container on props */