import React, {useState} from "react";
import {numbers} from '../../../data';
import NumberButton from './NumberButton';

// we can also import to the parent right?

//import any components needed
// example of import from data.js. Note all the ../ This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  
  const [number, setNumber] = useState(numbers);
  
  return (
    <div>
      {number.map((item, index) => (
        <NumberButton key={index} button={item} setDisplay={props.setDisplay}/>
      ))}
    </div>
    
    /* STEP 3 - Use .map() to iterate over your array data and return a button
    component matching the name on the provided file. Pass
    it any props needed by the child component*/
  );
};

export default Numbers;