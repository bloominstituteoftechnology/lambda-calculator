import React, {useState} from "react";
import {operators} from "../../../data";
import OperatorButtons from "./OperatorButton";
//needs to be in curly braces because it is js, not js.
//we are importing the array of objects called 'operators'

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);

  return (
    <div>
      {operatorState.map((operatorObject, index)=>
        <OperatorButtons
          operatorKey = {index}
          operatorChar = {operatorObject.char}
          operatorValue = {operatorObject.value}
        />  
      )}
    </div>
  );
};

export default Operators;

/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/