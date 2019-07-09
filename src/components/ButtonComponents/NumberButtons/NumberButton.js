import React from "react";

const NumberButton = (props) => {

  function submitNumber(number) {
    if (props.firstNumGiven === false){
      props.setFirstNum(number)
      props.setFirstNumGiven(true)
    } else {
      props.setSecondNum(number)
    }
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div 
        className = {props.number == 0 ? "zero" : "number"}
        onClick = {() => submitNumber(props.number)}
      >{props.number}</div>
    </>
  );
};

export default NumberButton;
