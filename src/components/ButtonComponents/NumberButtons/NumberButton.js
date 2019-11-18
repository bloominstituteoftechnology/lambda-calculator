import React from "react";

const NumberButton = ({ callback, number }) => {
  return (
    <div
      className="number"
      onClick={() => {
        callback(number);
      }}
    >
      {number}
    </div>
  );
};

export default NumberButton;
