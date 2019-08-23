import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className={props.number === '0' ? "zero" : null } >{props.number}</button>
    </>
  );
};

export default NumberButton;