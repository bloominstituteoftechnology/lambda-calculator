import React from "react";

const OperatorButton = (props) => {
  //console.log(props);
  return (
    <div className='operatorButton'>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {/* <button */}
      <button onClick={() => props.addOperator(props.operator.value)}>
        {props.operator.char}
      </button>
    </div>
  );
};

export default OperatorButton;
