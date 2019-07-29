import React from "react";

const OperatorButton = ({operator: { char, value }, clickOperatorButton}) => {
  return (
    <>
    <button onClick={clickOperatorButton}>
      {char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
    </>
  );
};


export default OperatorButton;