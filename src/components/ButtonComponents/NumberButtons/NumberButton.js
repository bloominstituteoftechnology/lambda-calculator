import React from "react";

const NumberButton = props => {
  console.log(props);
  return (
    <>
      <button className="numButtons">{props.numberString}</button>
    </>
  );
};

export default NumberButton;