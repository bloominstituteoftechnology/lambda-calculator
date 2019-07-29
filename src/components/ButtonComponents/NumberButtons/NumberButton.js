import React from "react";
import "../../../../src/App.css";

const NumberButton = (props) => {
  function addZeroStyle(number){
    if (number === "0"){
      return "zeroButton";
    }
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className={`numberButton ${addZeroStyle(props.number)}`}>{ props.number }</button>
    </>
  );
};

export default NumberButton;