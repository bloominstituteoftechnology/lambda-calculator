import React from "react";

//import any components needed
import { operators } from '../../../data';

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  return (
    <div className="operators-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      { operators.map( (operator) => {
        return <button 
                  key={operator.value} 
                  className="buttons operators"
                  value={operator}
                  onClick={props.handleOperator}  
                >
                  {operator.char}
                </button>
      })}
    </div>
  );
};
export default Operators;