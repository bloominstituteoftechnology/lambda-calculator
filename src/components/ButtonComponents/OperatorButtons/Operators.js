// import React from "react";
import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data";
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operator, setOperatorState] = useState(operators);
  return (
    <div classname="operators">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operator.map((operator, index) => (
        <OperatorButton key={index} operator={operator} />
      ))}
    </div>
  );
};

export default Operators;
