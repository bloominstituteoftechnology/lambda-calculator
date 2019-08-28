import React from "react";

const OperatorButton = (props) => {
  console.log(props)
  return (
    <button onClick={() => props.pushOpp(props.operator.value)} className='oppButton'>{props.operator.char}</button> 
  );
};

export default OperatorButton;