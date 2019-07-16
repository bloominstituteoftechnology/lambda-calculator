import React from "react";

const NumberButton = (props) => {
  return (
    <div>
      <button>{props.numbersMapped}</button>
    </div>
  );
};

export default NumberButton;