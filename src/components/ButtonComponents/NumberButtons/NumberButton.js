import React from "react";


const NumberButton = (props) => {
 
  return( <button className='numbButton' onClick = {() => props.addNumb(props.text)}>
  {props.text}</button> );
 
};

export default NumberButton;