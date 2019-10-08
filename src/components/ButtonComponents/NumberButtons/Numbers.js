import React, {useState} from "react";
import { numbers } from '../../../data';
import NumberButton from './NumberButton';


const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

       {numberState.map((numButton, index) => (
        < NumberButton key={index} number={numButton} / >
       ))}
       
    </div>
  );
};

export default Numbers;
