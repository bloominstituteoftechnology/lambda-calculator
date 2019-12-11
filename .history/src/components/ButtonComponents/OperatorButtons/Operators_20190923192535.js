import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data";

const Operators = () => {

  const [operatorValue, setOperator] = useState(operators);
  return (
    <div>
      {operatorValue.map((ops, index) => (
        <OperatorButton key={ index } operator={ ops } />
      ))}
    </div>
  );
};
export default Operators;