import React, {useState} from "react";
import {operators} from '../../../data';
import OperatorButton from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operator, setOperator] = useState(operators);
  
  return (
    <div>
      {operator.map((item, index) => (
        <OperatorButton key={index} button={item.char}/>
      ))}
    </div>
  );
};

export default Operators;