import React from "react";

const NumberButton = ({ currentNum }) => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      { currentNum }
    </button>
  );
};

export default NumberButton;