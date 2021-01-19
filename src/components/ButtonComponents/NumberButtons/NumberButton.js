import React from "react";
import Numbers from "./Numbers";

const NumberButton = props => {
  return (
    <div className="button">
      <Numbers />
    </div>
  );
};

export default NumberButton;

/* Display a button element rendering the data being passed down from the parent container on props */