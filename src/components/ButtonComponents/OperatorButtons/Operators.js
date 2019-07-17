import React, {useState} from "react";
import OperatorButton from './OperatorButton'

import {operators} from '../../../data';
//import any components needed

//Import your array data to from the provided data file
/* {STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component}*/

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [ops, setOps] =useState(operators)

  return (
    <div>
      {ops.map((item, index) => {
        // console.log(item)
        /*pass data to operator button*/
        return <OperatorButton  key={index} operatorContent={item.char} value={item.value}/>
      })}
    </div>
  )
};

export default Operators