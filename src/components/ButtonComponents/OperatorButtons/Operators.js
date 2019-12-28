import React, {useState} from "react";
import { operators } from "../../../data";
//import any components needed
import OperatorButton from "./OperatorButton";

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorsArrayOfObjects] = useState(operators)
  console.log("operatorsArrayOfObjects: ", operatorsArrayOfObjects)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operatorsArrayOfObjects.map((operator, index) => {
         return <OperatorButton item={operator} key={index} />
       })}
    </div>
  );
};

export default Operators;
