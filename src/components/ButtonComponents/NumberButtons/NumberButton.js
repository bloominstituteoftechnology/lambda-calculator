import React from "react";

const NumberButton = (props) => {
  return (
    <>
      <div className="number-button">{props.data}</div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;