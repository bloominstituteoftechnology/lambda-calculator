import React from "react";

const NumberButton = (props) => {
  return (
    <button>
    {props.button.index}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;
