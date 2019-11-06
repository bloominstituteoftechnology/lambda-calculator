import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "../NumberButtons/NumberButton";

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [num] = useState(numbers);
  return (
    <div className="numBtns">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      num.map((item, index) =>
        item === "0" ? (
          <NumberButton key={index} number={item} class0="zeroBtn" />
        ) : (
          <NumberButton key={index} number={item} />
        )
      )}
    </div>
  );
};

export default Numbers;
