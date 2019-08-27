import React from "react";

const OperatorButton = (props) => {
  return (
    <button className='oppButton'>
    {props.operator.char}</button> 
  );
};

export default OperatorButton;