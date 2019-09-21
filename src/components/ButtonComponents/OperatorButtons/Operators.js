import React, {useState} from "react";
import { operators } from "../../../data.js"
import OperatorButton from "./OperatorButton.js"

const Operators = () => {
  const operatorState = useState(operators)[0];
  return (
    <div className="operators">
      {
       operatorState.map((op, index) => {
        return <OperatorButton value={op.value} key={op.value} label={op.char}/>
       })
      }
    </div>
  );
};

export default Operators;
