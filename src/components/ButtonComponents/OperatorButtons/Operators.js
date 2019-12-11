import React, {useState} from "react";

//import any components needed
import { operators } from '../../../data' ;
import OperatorButton from './OperatorButton';
//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators)
  return (
    <div class="operation-container">
      {
        operatorState.map((button,index) => (

          <OperatorButton key={index} button={button}/>
        ))
      }
    </div>
  );
};

export default Operators;
