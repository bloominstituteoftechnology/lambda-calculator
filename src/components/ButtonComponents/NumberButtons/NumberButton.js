import React from "react";

const NumberButton = props => {
  return (
    <>
    <div>
      <button>{props.number}</button>
    </div>
    </>
  );
};

export default NumberButton;