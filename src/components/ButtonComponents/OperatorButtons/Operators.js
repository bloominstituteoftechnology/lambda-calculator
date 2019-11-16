import React, { useState } from "react";

import { operators } from "../../../data"
import { OperatorButton } from "./OperatorButton"

//import any components needed

//Import your array data to from the provided data file

export const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [ operatorValue, setOperatorValue ] = useState(operators)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operators.map((operator, idx) => {
        return (
          <OperatorButton
            key={idx}
            operator={operator.char}
            setDisplayValue={props.setDisplayValue}
          />
        )
      })}
    </div>
  );
};
