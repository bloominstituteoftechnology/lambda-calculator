import React from "react";
import {operators} from "../../../data";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operator, setOperator] =  useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
                   {operatorsState.map((element, index) => (
                <OperatorButton key={index} operator={element.char} />
            ))}
    </div>
  );
};

export default Operators
