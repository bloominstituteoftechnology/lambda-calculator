import React, {useState} from "react";
import OperatorButton from './OperatorButton.js'
//import any components needed
import {operators} from '../../../../src/data.js'
//Import your array data to from the provided data file

const Operators = (props) => {
  const [operator, setOperator] = useState(operators)
  return (
    <div>
      {operator.map(xOperator =>{
        return(
          <OperatorButton key={xOperator.char} operator={xOperator} addOpp = {props.addOpp}/>
        )
      })}
    </div>
  );
};

export default Operators;