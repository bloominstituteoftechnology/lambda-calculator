import React, { useState } from "react";
//import any components needed
import NumberButton from './NumberButton'
//Import your array data to from the provided data file
import { numbers } from './../../../data'

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbersState, setNumberState] = useState(numbers);
  console.log('numbers', { numbersState });
  
  return (
    <div>
        {
          numbersState.map((number, index) => (
          <NumberButton numbers={number} key={index} />
       ))}
    </div>
  );
};

export default Numbers;