import React from "react";

const OperatorButton = (props) => {

  function setOperator(operator){
    if (operator === "="){
      props.setCalculated(true)
      props.calculate()
    } else {
      props.setOperator(operator)
    }
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div 
        className = "operator"
        onClick = {() => setOperator(props.operatorObj.value)}
      >{props.operatorObj.char}</div>
    </>
  );
};

export default OperatorButton;