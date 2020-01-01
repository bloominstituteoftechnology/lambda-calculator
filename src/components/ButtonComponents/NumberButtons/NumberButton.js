import React from "react";

const NumberButton = (props) => {

  return (
    <>
      <button className="number-button">{props.num}</button>
    </>
  );
};

export default NumberButton;