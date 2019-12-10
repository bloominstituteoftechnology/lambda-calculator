import React, { useState } from "react";
import OperatorButton from "../OperatorButtons";
import {  operators } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsState, setOperatorsState] = useState(operators);
  return (
    <div>
        {OperatorButton.map((button, index) => (
        <OperatorButton key={index} button={button} />
       ))}
    </div>
  );
};
