import React, { useState } from "react";

//import any components needed
import { NumberButton } from './NumberButton';

//Import your array data to from the provided data file
import { numbers } from '../../../data';

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numState] = useState(numbers);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numState.map((number, index) => { return <NumberButton number={number} /> })};
    </div>
  );
};

export default Numbers;














/*
**Ya'kuana's notes**
import React, {useState} from "react";
import { numbers } from '../../../data';
import { NumberButton } from "./NumberButton";

const Numbers = () => {
const [numberState] = useState(numbers);
  return (
    </div>
      {numberState.map((number) => {return <NumberButton buttonNum = {number}/>})}
    </div>
  );
};
*/