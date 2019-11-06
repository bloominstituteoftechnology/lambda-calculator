import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "../OperatorButtons/OperatorButton";

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [op] = useState(operators);
  return (
    <div className="opBtns">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      op.map((item, index) => (
        <OperatorButton key={index} oper={item.char} />
      ))}
    </div>
  );
};

export default Operators;
