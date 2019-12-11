import React from "react";
import "./../../../App.css"

const NumberButton = props => {
  console.log(props);
  return (
    <>
    <button className="number-button" onClick={() => props.addNumber(props.text)}>
      {props.text}
    </button>
    </>
  )
};

export default NumberButton;
