import React from "react";
import "../../../../src/App.css";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="numberButton">{ props.number }</button>
      { console.log(props.number) }
    </>
  );
};

export default NumberButton;