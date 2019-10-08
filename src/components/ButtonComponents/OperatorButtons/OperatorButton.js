import React from "react";

const OperatorButton = (props) => {
  const { operator } = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operation-btn">{operator}</button>
    </>
  );
};

export default OperatorButton;