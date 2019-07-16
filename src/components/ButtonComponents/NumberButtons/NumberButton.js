import React from "react";

const NumberButton = (number, props) => {
  function fn() {
    var currentNumber = "";

    if (props.number !== "0") {
      currentNumber = props.number;
    }

    const newNumber = currentNumber + number;
    props.setNumber(newNumber);
  }

  return (
    <button className="button" key={number} onClick={fn}>{number}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;