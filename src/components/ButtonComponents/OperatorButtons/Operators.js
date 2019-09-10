import React, {useState} from "react";
import {operators} from "../../../data";
import OperatorButton from '../OperatorButtons/OperatorButton';

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [ops, saveOper] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       
       {
         ops.map((oper) =><OperatorButton operator={oper} saveOper={saveOper}/> )
        
       }
    </div>
  );
};

export default Operators;