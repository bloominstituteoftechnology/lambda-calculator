import React, {useState} from "react";
import OperatorButton from './OperatorButton.js'
import {operators} from '../../../../src/data.js'

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  const [operator, setOperator] = useState(operators)
  // STEP 2 - add the imported data to state
  return (
    <div>
      {operator.map(calcOperator =>{
        return(
          <OperatorButton key={calcOperator.char} operator={calcOperator} addOperator = {props.addOperator}/>/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
         ) 
      })}
    </div>
  );
};

export default Operators;
