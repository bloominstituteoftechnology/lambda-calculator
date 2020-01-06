
import React, { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

const Numbers = () => {
  const [numberState, setNumberState] = useState(numbers);
  console.log(numberState);
  // STEP 2 - add the imported data to state
  return (
    <div className="numbers">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numberState.map((number, index) => {
        return <NumberButton key={index} numberString={number} />;
      })}
    </div>
  );
};

export default Numbers;