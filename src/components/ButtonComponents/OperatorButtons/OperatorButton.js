import React from "react";


const OperatorButton = () => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>

<button className="OperatorButton">
{props.data.operators.char}
</button>
  );
};

export default OperatorButton;
