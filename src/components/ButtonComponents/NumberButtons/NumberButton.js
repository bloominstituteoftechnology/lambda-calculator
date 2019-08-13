import React from "react";

const NumberButton = (props) => {
  const {number} = props
  return (
    <button className="btn">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {number}
    </button>
  );
};

export default NumberButton;
