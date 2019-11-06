import React from "react";

const NumberButton = (props) => {
  return (
    <div>
    <button className={`button${props.button}`} onClick={() => props.displayChanger(props.button)}>{props.button}</button>
    </div>
  );
};

export default NumberButton