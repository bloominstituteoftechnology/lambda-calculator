import React, { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

// const Numbers = ({ updatedValue }) => {
//   const [NumberState] = useState(numbers);
 
//   // STEP 2 - add the imported data to state
//   return (
//     <div>
//          {NumberState.map((number, index) => (
//          <NumberButton key={index} number={number} clickNumberBtn={() => updatedValue(number)}/>
//        ))}
//     </div>
//   );
// };

const Numbers = (props) => {
  const [buttonNumbers, setbuttonNumbers ] = useState(numbers);
  return (
    <div>
      { buttonNumbers.map(number => <NumberButton key={number} text={number} addNumber={props.addNumber} />) }
    </div>
  );
};

export default Numbers;