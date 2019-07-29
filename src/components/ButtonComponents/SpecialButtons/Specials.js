import React, { useState } from "react";

//import any components needed
import SpecialButton from "./SpecialButton";
//Import your array data to from the provided data file
import { specials } from "../../../data";

const Specials = ({ updateValue, resetValue }) => {
  const [specialState] = useState(specials);
  const clickSpecialButton = button => {
    if(button === 'C'){
      resetValue();
    } else {
      updateValue(button);
    }
  }
  // STEP 2 - add the imported data to state

  return (
    <div>
      {specialState.map((special) => {
        return (
        <SpecialButton special={special} updateValue={() => clickSpecialButton (special)} />
        )
      })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials;
