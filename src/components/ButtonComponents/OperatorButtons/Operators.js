import React, {useState} from "react";
import {operators} from '../../../data';
import OperatorButton from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file


const Operators = () => {
  const [ops] = useState(operators)
  // STEP 2 - add the imported data to state
  return (
    <>
      {ops.map((operator, idx) => {
        return <OperatorButton operator={operator.char} key={idx}/>
      })}
    </>
  );
};

export default Operators;