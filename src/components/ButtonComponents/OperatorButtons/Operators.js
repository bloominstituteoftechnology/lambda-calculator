import React, {useState} from "react";
import OperatorButton from './OperatorButton.js'
import {operators} from '../../../data'

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operator] = useState(operators)
  // STEP 2 - add the imported data to state
  return (
    <div>
      {operator.map(calcOperator => (
        <OperatorButton key={calcOperator.char} operator={calcOperator}/> 
      ) 
      )}
    </div>
  );
};

export default Operators;
