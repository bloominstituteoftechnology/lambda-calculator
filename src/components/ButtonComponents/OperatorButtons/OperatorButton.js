import React, {useState} from "react";
import {operators} from "../../../data";


const OperatorButton = (props) => {
  const {operator, saveOper} = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    <div>
       <button onClick={() =>saveOper(operator.value)}>{operator.char}</button>
    </div>
    </>
  );
};

export default OperatorButton;
