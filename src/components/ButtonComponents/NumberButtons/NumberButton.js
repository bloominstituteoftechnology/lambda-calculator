import React from "react";

const NumberButton = (props) => {
  
  

  function updateValue() {

    if (props.displayResult != '0') 
    
       return props.setDisplayResult(props.displayResult+props.number);
    else
      return props.setDisplayResult(props.number);
  }
  if (props.number !== '0') {
  return (   
    <button className= 'number-button' onClick={() => updateValue()}>
    {props.number}
  </button>
  );}
  else {
    return (   
      <button className= 'number-button zero-button' onClick={() => updateValue()}>
      {props.number}
    </button>
    );}
  
};

export default NumberButton;