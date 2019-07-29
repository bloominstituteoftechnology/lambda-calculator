import React, { useState } from "react";

//import any components needed
import OperatorButton from "./OperatorButton";
//Import your array data to from the provided data file
import { operators } from "../../../data";

const Operators = ({ updateValue, calculateValue }) => {
  const [operatorState] = useState(operators);
  // STEP 2 - add the imported data to state
  const clickOperatorButton = button => {
    if(button === '='){
      calculateValue();
    } else {
      updateValue(button);
    }
  }
  return (
    <div>
      {operatorState.map((operator) => {
        return (
        <OperatorButton operator={operator} clickOperatorButton={() => clickOperatorButton(operator.value)} />
        );
      })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators;
