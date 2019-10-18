import React, {useState} from "react";

//import any components neededs 
import {OperatorButton} from './OperatorButton'

//Import your array data to from the provided data file
import { operators } from '../../../data' 
import { isTemplateElement } from "@babel/types";

export const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [buttonOp] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      <div> 
        {buttonOp.map(item => ( 
          <OperatorButton 
          char={item.char}
          // value={item.value}
          // key={item.key}
          />
        ))} 
       </div>
    </div>
  );
};