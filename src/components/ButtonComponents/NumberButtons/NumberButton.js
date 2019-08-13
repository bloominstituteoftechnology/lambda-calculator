import React from "react";


const NumberButton = props => {
  return (

      <button className={`number${props.digit}`}>{props.digit}</button>
  );
};

export default NumberButton;
