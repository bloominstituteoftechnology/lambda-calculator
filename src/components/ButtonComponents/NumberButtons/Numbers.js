import React, { useState } from "react";
import { numbers } from "../../../data";
import { NumberButton } from "./NumberButton";
import "../../../App.css";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

export const Numbers = props => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);

  return (
    <div>
      {numberState.map((number, index) => {
        return <NumberButton num={number} key={index} />;
      })}
    </div>
  );
};
