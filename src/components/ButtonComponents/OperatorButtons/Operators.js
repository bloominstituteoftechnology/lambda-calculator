import React, { useState } from "react";
//import any components needed
import OperatorButton from './OperatorButton'
//Import your array data to from the provided data file
import { operators } from './../../../data'

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsState, setOperatorState] = useState(operators);
  console.log('operators', { operatorsState });
  return (
    <div>
              {
          operatorsState.map((operator, index) => (
          <OperatorButton operators={operator.char} value={operator.value} key={index} />
       ))}
    </div>
  );
};

export default Operators;