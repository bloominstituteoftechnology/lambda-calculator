import React from "react";

const NumberButton = (number) => {
  return (
    <button className="button" key={number}>{number}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;