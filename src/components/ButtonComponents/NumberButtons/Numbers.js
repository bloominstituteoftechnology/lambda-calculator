import React, { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  const [NumberButton, setNumberButton] = useState(numbers);
 
  // STEP 2 - add the imported data to state
  return (
    <div>
         {NumberButton.map((button, index) => (
         <NumberButton key={index} button={button} />
       ))}
    </div>
  );
};

export default Numbers;