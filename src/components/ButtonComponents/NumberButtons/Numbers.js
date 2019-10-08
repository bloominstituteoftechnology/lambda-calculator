import React, {useState} from "react";
import {Numbers} from '../../../data';
import {Numbers} from '../NumberButtons';

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  const [numberState, setNumberState]= useState(numbers);
  // STEP 2 - add the imported data to state
  return (
    <div>
      <div className ='myNumbers'/>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numberState.map((button, index) => (
         <NumberButton key={index} button = {button}/>
       ))}
    </div>
  );
};
export Numbers;
