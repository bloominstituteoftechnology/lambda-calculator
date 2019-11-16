import React from "react";

const NumberButton = ({ number }) => {
  return(
  <div className={`btn  btn-number ${number === '0' ? 'double' : '' }`}>
    <button>{number}</button>
  </div>
  )
};

export default NumberButton;
