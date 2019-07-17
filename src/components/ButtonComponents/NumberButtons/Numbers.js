import React, { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";
//import any components needed

//Import your array data to from the provided data file

const Numbers = ({ change }) => {
  // STEP 2 - add the imported data to state
  const [numbersList, setNumbersList] = useState(numbers);
  //console.log("hello how r u", numbers);

  return (
    <div className="numbers-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numbers.map(number => (
        <NumberButton key={number} change={change} number={number} />
      ))}
    </div>
  );
};

export default Numbers;
