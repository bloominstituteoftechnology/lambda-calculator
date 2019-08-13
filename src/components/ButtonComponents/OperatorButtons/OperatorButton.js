import React from "react";

const OperatorButton = ({operator, value}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{operator}</button>
    </>
  );
};

export default OperatorButton;
