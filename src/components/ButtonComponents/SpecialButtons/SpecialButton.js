import React from "react";
import {btnStyle} from "./Specials";

const SpecialButton = props => {

  return (
    <button onClick={ ()=> props.setDataSB( (props.specialSB === 'C') ? '' : ( (props.specialSB === '%') ? parseFloat(props.dispDataSB) * .01: -parseFloat(props.dispDataSB) ))}  style={btnStyle}>{props.specialSB}</button>

        /* Display a button element rendering the data being passed down from the parent container on props */
  );
};

export default SpecialButton;
