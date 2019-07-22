import React from "react";
import {btn0Style, btnStyle} from './Numbers'
  const NumberButton = props => {
  return (
    
      <button onClick={ ()=> props.setDataNB(props.dispDataNB + props.numberNB) }  style={props.numberNB === '0' ? btn0Style : btnStyle}>{props.numberNB}</button>

      // {/* Display a button element rendering the data being passed down from the parent container on props */}
    
  );
};

export default NumberButton;
