import React, {useState} from "react";
import { numbers } from "../../../data";
import { NumberButton } from "./NumberButton";


//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

export const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbersState, setNumberState] = useState(numbers)
  return numbersState.map( number => (
    <div>
      <NumberButton num={number} />
    </div>
  ));
};
