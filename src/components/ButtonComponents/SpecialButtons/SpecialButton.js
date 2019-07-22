import React from "react";
import {btnStyle} from "./Specials";


const SpecialButton = props => {
  
  function tryit (){
    let x ='';
      try {
      x =  Function('"use strict";return (' + (props.dispDataSB)  + ')')()
      }catch(error) {
      x = 'error'  
      }
    return x
    }
    
  return (
      (props.specialSB === 'M=' )
      ?
(
      <button onClick={ ()=> props.setMem(props.dispDataSB)}  style={btnStyle}>{props.specialSB}</button>
)
:
(
<button onClick={ ()=> props.setDataSB( (props.specialSB === 'C') ? ''
 :
(props.specialSB === 'MR')
?
(props.dispDataSB + props.memData)
:
( (props.specialSB === '%') ?
tryit()*.01
:
 -tryit()
 ))}  style={btnStyle}>{props.specialSB}</button>
  )
        /* Display a button element rendering the data being passed down from the parent container on props */
  );

};

export default SpecialButton;
