import React, { useState } from "react";

//import any components needed
import { operators } from '../../../data';

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operator, setOperator] = useState(operators);
  Array.from(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      { operators.map( (item) => {
        return <button key={item.value} className="buttons operators">{item.char}</button>
      })}
    </div>
  );
};
export default Operators;