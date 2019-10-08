import React, {useState} from "react";
import {Operators} from '../../../data';
import {Operators} from '.../Operators';
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorState, setOperatorState] = useState(Operators);

  // STEP 2 - add the imported data to state
  return (
    <div>
      <div className = 'myOperators'/>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operatorState.map((button, index) => (
         <OperatorButton key={index} button = {button}/>
       ))}
    </div>
  );
};
export Operators;