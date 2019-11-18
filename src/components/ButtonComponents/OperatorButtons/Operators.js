import React from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file

const Operators = ({ callback }) => {
  // STEP 2 - add the imported data to state
  return (
    <div className="operators">
      {operators.map((operator, index) => (
        <OperatorButton
          key={index}
          callback={callback}
          operator={operator.char}
        />
      ))}
    </div>
  );
};

export default Operators;
