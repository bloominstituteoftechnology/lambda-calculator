import React from "react";
// import numbers from '../../../data';
//import numbers from "../../../data";

const NumberButton = props => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.buttonText}{" "}
    </button>
  );
};

export default NumberButton;
