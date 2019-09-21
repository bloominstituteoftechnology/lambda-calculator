import React from "react";

export const NumberButton = (props) => {
  return (
    <button
    onClick={() => props.setNumberState(props.dataNumbers)}
    >
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
