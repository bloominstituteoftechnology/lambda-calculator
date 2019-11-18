import React, {useState} from "react";

//import any components needed

import NumberButton from './NumberButton';

// example of import from data.js. Note all the ../   This is how we move through folders. 
 
import { numbers } from "../../../data";

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [buttonNumbers, setButtonNumbers] = useState(numbers);
  return (
    <div className = "number-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {buttonNumbers.map(number => {
         return <NumberButton key = {number} buttonText = {number} addNumber = {props.addNumber} />;
          })
        }
    </div>
  );
};

export default Numbers;