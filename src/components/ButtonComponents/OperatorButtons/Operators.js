import React, { useState } from "react";

//import any components needed
import { operatorsArray } from '../../../data';
import OperatorButton from './OperatorButton';

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operator, setOperator] = useState(operatorsArray);
  return (
    <div>
      {operatorsArray.map(item => (
        <OperatorButton operator={item.char} />
      ))}
    </div>
  );
};
 export default Operators;