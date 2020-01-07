import React from "react";
import { bigIntLiteral } from "@babel/types";

const SpecialButton = (props) => {
  return (
    <>
    <div className={`s${props.id}`}><button className={`specButton s${props.id}`} onClick={() => { 
  {
    switch(props.spec){
      case 'C':
        props.setCalc("")
        break;
      case '%':
        props.setCalc(eval(`0.0${props.calc}`))
    }

    {
      if (props.spec === "+/-") {
        props.setCalc(`+${props.calc}`)
        if (props.calc.includes("+")) {
          props.setCalc(props.calc.replace("+", "-"))
          }
        if (props.calc.includes("-")) {
            props.setCalc(props.calc.replace("-", "+"))
            }
      }
  
    }
  }} }>{props.spec}</button></div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton

// props.setCalc(`-${props.calc}`)