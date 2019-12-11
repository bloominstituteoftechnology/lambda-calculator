import React, {useState} from "react";
import { operators } from "../../../data";
import {OperatorButton} from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

export const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsState, setOperatorsState] = useState(operators);
  return operatorsState.map(operator => (
    <div>
      <OperatorButton op={operator.char} />
    </div>
  ));
};
