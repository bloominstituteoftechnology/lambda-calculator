import React, { useState } from "react";

//import any components needed
import OperatorButton from './OperatorButton';

//Import your array data to from the provided data file
import { operators } from '../../../data';

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperators] = useState(operators);
  const operatorStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: '13px',
    height: '100%',
    order: '3'
  }
  return (
    <div style={operatorStyle}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operatorState.map(operator => {
        return <OperatorButton operator={operator.char} value={operator.value} />
      })}
    </div>
  );
};

export default Operators;