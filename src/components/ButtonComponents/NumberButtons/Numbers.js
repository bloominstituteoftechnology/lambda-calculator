import React, {useState} from "react";

//import any components needed
import NumberButton from './NumberButton';
import {numbers} from '../../../data'
import { tsPropertySignature } from "@babel/types";
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [buttonNumbers, setNumberButton] = useState(numbers)
  return (
    <div>
      {buttonNumbers.map(numbers => <Numbers  />)}
      <NumberButton />
    </div>
  );
};
export default Numbers