import React, {useState} from "react";
//import any components needed
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file

export default function Numbers () {
  // STEP 2 - add the imported data to state
  const [numbersState] = useState(numbers);
  console.log("numbas", useState());

  return (
    <div className = "numbers-div">
      {numbersState.map((numbers, index) => (
        <NumberButton key = {index} numbers={numbers} />
      ))}
    </div>
  );
};

