import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsState] = useState(operators);
  return (
    <div className="op-contain">
      {operatorsState.map((operators, index) => {
        return <OperatorButton key={index} operators={operators} />;
      })}
    </div>
  );
};

export default Operators;
