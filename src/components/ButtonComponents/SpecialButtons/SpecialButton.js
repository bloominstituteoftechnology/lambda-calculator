import React from "react";

const SpecialButton = (props) => {
  function updateValue () {
    if (props.symbol === 'C') return props.setDisplayResult(0)

    if (props.symbol === '+/-' && props.displayResult[0] !== '-') 
      return props.setDisplayResult('-'+props.displayResult)

    if (props.symbol === '+/-' && props.displayResult[0] === '-') 
      return props.setDisplayResult(props.displayResult.slice(1,props.displayResult.length))
    if (props.symbol === '%' && props.displayResult){
      console.log(props.displayResult);
      return props.setDisplayResult(props.displayResult/100);
    }



  }
  return (
    <button className='special-button' onClick={() => updateValue()}>{props.symbol}</button>
  );
};
export default SpecialButton;