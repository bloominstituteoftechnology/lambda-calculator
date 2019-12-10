import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="buttons">
      {props.symbol}
    </button>
  );
};

export default SpecialButton;
