import React from "react";
import {operators} from "../../../data.js";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  let signs = operators.map(signs => {
    return <OperatorButton signs={signs}/>
  })

  return (
      console.log(operators),
    <div className="what-if">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {signs}
    </div>
  );
};

export default Operators;
