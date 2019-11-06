import React from "react";

const NumberButton = props => {
  const { number } = props;
  return (
    <>
      <div className="btn-cont">
        <button>{number}</button>
      </div>
    </>
  );
};

export default NumberButton;
