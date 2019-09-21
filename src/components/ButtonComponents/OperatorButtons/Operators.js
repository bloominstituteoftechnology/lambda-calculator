import React, { useState }from "react";

//import any components needed

//Import your array data to from the provided data file
import { operators } from '../../../data.js';
import { OperatorButton } from './OperatorButton.js';

export const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);
  
  const operatorButtons = operatorState.map(operator => (
    <OperatorButton operator1={operator.value}

    key={operator.value}
    />
  ));
  
  return (
    <div>
      {operatorButtons}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
