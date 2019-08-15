import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {/* The empty brackets are called fragments. Display a button element rendering the data being passed down from the parent container on props */}
      {
        <button>{props.text}</button>
      }
    </>
  );
};
export default NumberButton;