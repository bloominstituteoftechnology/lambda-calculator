import React from "react";

const NumberButton = (props) => {
  return (
    <div>
      <button className="btn number-btn">{props.numbersMapped}</button>
    </div>
  );
};

export default NumberButton;