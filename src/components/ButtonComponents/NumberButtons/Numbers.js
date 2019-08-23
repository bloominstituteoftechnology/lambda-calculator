import React, { useState } from "react";

//import any components needed
import NumberButton from './NumberButton';

//Import your array data to from the provided data file
import { numbers } from '../../../data';


const Numbers = (props) => {
  const { numbers } = props;

  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numbers.map((item, index) => {
         return <NumberButton key={index} numbers={item.numberState} />
       })}
       <CreateNumberButtons numbers={numberState} />
    </div>
  );
};

const CreateNumberButtons = (numbers) => {
  numbers.map(() => {
    return <NumberButton />
  })
}

export default Numbers;