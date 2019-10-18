import React from "react";

export const NumberButton = (props) => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.numbers}</button>
    </div>
  );
};