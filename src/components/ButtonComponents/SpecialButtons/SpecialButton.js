import React from "react";

const SpecialButton = (props) => {
  console.log(props)
  return( 
  <button onClick={() => props.pushSpecial(props.text)} className='specialButton'>{props.text}</button> );
};

export default SpecialButton;