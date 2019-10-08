import React, {useState} from "react";
import { operators } from '../../../data';
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

 const Operators = () => {
  // STEP 2 - add the imported data to state
  const [buttons] = useState(operators);

console.log("test",operators, buttons)
  return (
    <div className = "Operator-btn">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       buttons.map((button,index) => (
      
        <OperatorButton key={index} result={(button.char)} value ={(button.value)}/>
       
      ))}



       
    </div>
  );
};

export default Operators;
