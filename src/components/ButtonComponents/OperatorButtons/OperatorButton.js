import React from "react";

const OperatorButton = (operator) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className="button operators">{operator}</div>
    </>
  );
};

export default OperatorButton;