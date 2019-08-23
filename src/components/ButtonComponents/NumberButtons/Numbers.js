import React, { useState } from "react";
import Numbers from '../../../data'

//import any components needed

//Import your array data to from the provided data file
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";


const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [setNumber] = useState(numbers)
  
  return (
    <div>
      {setNumber.map((item, index) => {
        return <NumberButton key={index} item = {item} />
      })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers;
