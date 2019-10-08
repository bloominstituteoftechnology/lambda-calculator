
import React from "react";
import {useState} from 'react';

//import any components needed
import OperatorButton from './OperatorButton';

//Import your array data to from the provided data file
import {operators} from '../../../data';

const Operators = props => {
  // STEP 2 - add the imported data to state
  const [operatorState] = useState(operators);
  return (
    <div className="operators">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {
         operatorState.map( (operator, index) =>{
          return <OperatorButton key={index} operator={operator.char} fnc={props.onButtonPress}/>;
         })
       }
    </div>
  );
};

export default Operators;