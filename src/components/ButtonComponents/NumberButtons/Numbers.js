import React from "react";

import {numbers} from "../../../data.js";
import { useState } from 'react';
import NumberButton from "./NumberButton.js";

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbersState, setNumberState] = useState(numbers);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/ 
       numbersState.map(number => <NumberButton number={number} />)
       } 
      
    </div>
  );
};

export default Numbers;
