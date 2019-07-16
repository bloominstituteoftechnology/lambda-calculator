import React from "react";

const OperatorButton = (operator) => {
  return (
    <button className="button operator" key={operator}>{operator}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;
