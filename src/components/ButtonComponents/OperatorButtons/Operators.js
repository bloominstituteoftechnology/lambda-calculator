import React, { useState } from "react";
import { operators } from '../../../data';
import OperatorButton from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [ourOperators] = useState(operators);

  return (
    <div className="operators-container">
      {ourOperators.map(info => (
        <OperatorButton key={info} operatorsMapped={info.char} operatorClick={props.operatorClick} opFunc={info.op} />
      ))}
    </div>
  );
};

export default Operators;