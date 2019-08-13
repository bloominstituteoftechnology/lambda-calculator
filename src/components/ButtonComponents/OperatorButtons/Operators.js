import React, {useState} from "react";
//import any components needed
import OperatorButton from "./OperatorButton";
//Import your array data to from the provided data file
import {operators} from "../../../data";

const Operators = () => {
  // STEP 2 - add the imported data to state
  let [opState, setOpState] = useState(operators);
  return (
    <div className="op-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {opState.map((operator) => 
        <OperatorButton data={operator} key={operator.value}/>
      )}
    </div>
  );
};

export default Operators;