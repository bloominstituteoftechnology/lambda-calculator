import React, {useState} from "react";
import OperatorButton from './OperatorButton'
//import any components needed
import {operators} from '../../../data';
//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [calOperators, setOperation] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {calOperators.map( (operator, index) => <OperatorButton key={index} operator={operator} changeData={props.changeData}/> )}
    </div>
  );
};

export default Operators;
