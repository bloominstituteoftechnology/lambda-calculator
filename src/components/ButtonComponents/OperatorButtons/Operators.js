import React, {useState} from "react";

//import any components needed
import OperatorButton from './OperatorButton'
//Import your array data to from the provided data file
import {operators} from '../../../data.js'
const Operators = (props) => {

  const [operatorState] = useState(operators)
  // STEP 2 - add the imported data to state
  return (
    <div className='operators-container'>
      { operatorState.map((operator,index) => {

       return <OperatorButton 
          key ={index}
          symbol={operator.char}
          value={operator.value} 
          displayResult={props.displayResult}
          setDisplayResult={props.setDisplayResult}/>
      })}
    
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Operators;