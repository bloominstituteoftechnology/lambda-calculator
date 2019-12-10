import React, {useState} from "react";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from ""../../../data"
*/
//Import your array data to from the provided data file
import { numbers } from "../../../data"
import NumberButton from './NumberButton';

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [number] = useState(numbers);

  return (
    <div>
      {number.map(button => (
        <NumberButton key={button} num={button}/>
      ))}
    </div>
  );
};

export default Numbers;
