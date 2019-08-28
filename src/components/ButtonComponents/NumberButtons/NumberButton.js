import React from "react";


const NumberButton = (props) => {
  console.log(props)
  return( 
  <button onClick={()=> props.pushNumb(props.text)} className='numbButton'>{props.text}</button> );
};

export default NumberButton;