import React, {useState} from "react";
import {numbers} from "../../../data"
import {NumberButton} from "./NumberButton";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
export const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState] = useState(numbers);
  let a1 = numberState.slice(0,3)
  let a2 = numberState.slice(3, 6)
  let a3 = numberState.slice(6, 9)
  let a4 = numberState.slice(9, 11)

  return (
    <div className='numbers'>
      <div className = "row">
        {a1.map((x, i) =>{
          return <NumberButton key={i} number={x} />
        })}
      </div>
      <div className = "row">
        {a2.map((x, i) =>{
          return <NumberButton key={i} number={x} />
        })}
      </div>
      <div className = "row">
        {a3.map((x, i) =>{
          return <NumberButton key={i} number={x} />
        })}
      </div>
      <div className = "row">
        {a4.map((x, i) =>{
          return <NumberButton key={i} number={x} />
        })}
      </div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
    
  );
};

export default Numbers;