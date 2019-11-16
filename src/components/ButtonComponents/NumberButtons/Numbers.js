import React, { useState }from "react";

//import any components needed
import NumberButton from "./NumberButton";

// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/

import { numbers } from '../../../data';

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberState] = useState(numbers);
  return (
    numberState.map((button, idx) => (
      <NumberButton key={idx} buttonText={button} buttonValue={button} clickHandler={props.btnClickHandler} />
    ))
  );
};

export default Numbers;