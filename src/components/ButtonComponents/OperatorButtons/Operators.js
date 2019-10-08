import React, {useState} from "react";
import { operators } from '../../../data';
import OperatorButton from './OperatorButton';

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [theOperators, setOperator] = useState(operators);
  
  return (
    <div className="operations-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {theOperators.map((operator, index) => (
         < OperatorButton key={index} operator={operator.char}/ >
       ))}
    </div>
  );
};

export default Operators;