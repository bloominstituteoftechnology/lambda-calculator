import React from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed

const Operators = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>{
      operators.map((operator) => (<OperatorButton key={operator.char} operator={operator.char} />))
    }
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators; 
