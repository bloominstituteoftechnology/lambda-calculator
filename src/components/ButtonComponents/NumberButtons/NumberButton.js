import React from "react";

const NumberButton = (props) => {
  console.log(props.numberHandler)
  return (
    <button onClick={() => {props.numberHandler(props.number)}}>
      {props.number}
        {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton