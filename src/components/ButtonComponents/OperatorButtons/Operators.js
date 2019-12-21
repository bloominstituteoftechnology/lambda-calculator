import React, { useState } from "react";
import { operators } from '../../../data';
import OperatorButton from './OperatorButton';
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operator, setOperatorState] = useState(operator);


  return (
    <div>
      {
      operators.map(operator => {
        return <OperatorButton operator={operator} />;
      })}
      }
    </div>
  );
};

export default Operators;


