import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed dow÷n from the parent container on props */}
    <button>
      {props.numberButton}
    </button>
    </>
  );
};

export default NumberButton