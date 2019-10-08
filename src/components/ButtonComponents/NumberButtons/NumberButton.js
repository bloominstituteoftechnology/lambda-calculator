import React from "react";

const NumberButton = (props) => {
  const { number } = props;
  
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}

      <button className="number-btn">{number}</button>
    </>
  );
};

export default NumberButton;