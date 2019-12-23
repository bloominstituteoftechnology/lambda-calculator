import React, { useState } from "react";
import OperatorButton from "./OperatorButton";

import { operators } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorState, setoperatorState] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div className="operatorButtons">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operatorState.map((character, index) => {
        return <OperatorButton key={index} operatorString={character.value} />;
      })}
    </div>
  );
};

export default Operators;
