import React from "react";

const NumberButton = (props) => {
  return (
    <button className="buttons">
      {props.num}
    </button>
  );
};

export default NumberButton;