import React from "react";

const OperatorButton = (props) => {
  return (
    <button className='oppButton' onClick = {() => props.addOpp(props.value)}>
    {props.operator.char}</button> 
  );
};

export default OperatorButton;