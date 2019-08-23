import React from "react";

const NumberButton = (props) => {
  const { nums } = props
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{nums}</button>
    </>
  );
};

export default NumberButton