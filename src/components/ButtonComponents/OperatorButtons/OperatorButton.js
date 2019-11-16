import React from "react";
import { operators } from '../../../data';

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button className="button operatorButtons" onClick={()=>props.changeDisplay(props.operator.char)}>
        {props.operator.char}
      </button>
      }
    </>
  );
};

export default OperatorButton;