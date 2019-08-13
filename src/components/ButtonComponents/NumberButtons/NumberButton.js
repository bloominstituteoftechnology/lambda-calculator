
import React from "react";

const NumberButton = (props) => {
  const {numbers} = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{numbers}</button>
    </>
  );
};

export default NumberButton;