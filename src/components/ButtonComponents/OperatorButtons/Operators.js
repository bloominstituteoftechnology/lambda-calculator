import React from "react";

import { operators } from "../../../data.js";
import { useState } from 'react';
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file


const Operators = () => {
  // STEP 2 - add the imported data to state
  const operatorsArray =[];
  operators.forEach(object => operatorsArray.push(object.char));

  const [operatorsState, setOperators] = useState(operatorsArray);
  console.log(operatorsState);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
     
      {operatorsState.map(operator => <OperatorButton operator={operator}/>)}
    </div>
  );
};

export default Operators;
