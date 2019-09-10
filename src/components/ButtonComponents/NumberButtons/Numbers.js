import React, {useState} from "react";
import NumberButton from './NumberButton.js'
import { numbers } from '../../../data';
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  const [number] = useState(numbers);
  // STEP 2 - add the imported data to state
  return (
    <div>
      {
      number.map((numbers, index) => (
        <NumberButton key = {index} numbers = {numbers} />
      ))
      }
    </div>
    
  );
};

export default Numbers;
