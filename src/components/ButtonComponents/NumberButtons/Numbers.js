import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setnNumberState] = useState(numbers);

  return (
    <div className="NumberButton">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numberState.map(number => (
        <NumberButton key={number} value={number} />
      ))}
    </div>
  );
};

export default Numbers;