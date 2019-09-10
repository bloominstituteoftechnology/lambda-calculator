import React, {useState} from "react";
import NumberButton from './NumberButton.js'
import { numbers } from '../../../../src/data';
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
  const [number, setNumber] = useState(numbers);
  // STEP 2 - add the imported data to state
  return (
    <div>
      {number.map(CalcNumbers => {
        return <NumberButton key={CalcNumbers} text={CalcNumbers}/>;/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
    })}
   </div>
    
  );
};

export default Numbers;
