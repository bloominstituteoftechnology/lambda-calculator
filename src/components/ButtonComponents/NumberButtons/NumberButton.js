import React from "react";

const NumberButton = () => {
const NumberButton = props => {
  console.log(props);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
    <button className="numButtons">{props.numberString}</button>
    // <>
    //   {/* Display a button element rendering the data being passed down from the parent container on props */}
    // </>
  );
};

export default NumberButton;