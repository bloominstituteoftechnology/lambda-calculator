//import React, { useState } from "react";
import React from "react";
import {numbers} from "../../../data.js";
import NumberButton from "./NumberButton";
//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {

  //const [lildigits, setLildigits] = useState(1);
  // STEP 2 - add the imported data to state
  //const [number, setNumber] = useState(0);
  const digits = numbers.map(digit => {
    return <NumberButton digit={digit} />
  });

  console.log(numbers);
  return (
    <div class="numbers">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {digits}
       {/*<NumberButton/>
       <NumberButton />
       <NumberButton /> */}
    </div>
  );
};

export default Numbers;
