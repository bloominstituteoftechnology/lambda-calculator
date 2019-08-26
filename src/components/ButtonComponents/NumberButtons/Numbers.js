import React, {useState} from "react";

//import any components needed
import NumberButton from './NumberButton';
import numbers from '../../../data';
//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  return numbers.map(num => <NumberButton number={num} display={props.display} setDisplay={props.setDisplay} />)
}
  
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

    </div>
  
export default Numbers;
