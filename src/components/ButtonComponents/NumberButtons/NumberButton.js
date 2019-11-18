import React from "react";
import '../../../App.css';


const NumberButton = (props) => {
  return (
    <>
     <button className={`numberButton ${props.num === '0' ? 'zeroButton' : ''}`} onClick={() => props.addNumber(props.num)}>{props.num}</button>
    </>
  );
};

export default NumberButton;