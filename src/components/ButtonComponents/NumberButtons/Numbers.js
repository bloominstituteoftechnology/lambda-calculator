import React, { useState } from "react";  //using useState must add it

//import any components needed
import NumberButton from './NumberButton.js';
//Import your array data to from the provided data file
import { numbers } from '../../../data.js';

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [btnNum, setBtnNum] = useState(numbers);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component 
       Implicit return arrow function*/}
      {btnNum.map(num => <NumberButton key={num} text={num} />)}
    </div>
  );
};
export default Numbers;