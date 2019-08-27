import React from "react";

const SpecialButton = (props) => {
  return( <button className='specialButton' onClick = {() => props.addSpecial(props.text)}>
  {props.text}</button> );
};

export default SpecialButton;