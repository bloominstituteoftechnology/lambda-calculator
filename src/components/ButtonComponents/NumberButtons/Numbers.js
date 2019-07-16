import React, { useState } from "react";
import NumberButton from "./NumberButton.js";
import { numbers } from "../../../data";
console.log(numbers);
//import any components needed
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  console.log("numbers, numberState");
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numberState.map((number, index) => {
        return <NumberButton number={number} key={index} />;
      })}
    </div>
  );
};

export default Numbers;
