import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data"

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [opState, displayOperator] = useState(operators);

  return (
    <div className="operator-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {opState.map(item => <OperatorButton opr={item} displayOpr={item} />
       )}
    </div>
  );
};

export default Operators;