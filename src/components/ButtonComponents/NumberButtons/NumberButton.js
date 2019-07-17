import React from "react";

const NumberButton = (props) => {
  // console.log("number button props", props)
  return (
    <button onClick={() => {props.selectNumber(props.number)}}>
      {props.number}
        {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton