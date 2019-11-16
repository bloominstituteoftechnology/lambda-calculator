import React from "react";
import operators from "../../../data";

const OperatorButton = props => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <span>{props.button.value}</span>
    </button>
  );
};
