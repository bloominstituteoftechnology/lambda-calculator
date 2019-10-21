import React, {useState} from "react";
import { numbers } from '../../../data';
import NumberButton from './NumberButton'

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numbersState, setNumbersState] = useState(numbers);
  console.log(numbersState)



  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       numbersState.map((number, index)=>{
         return <NumberButton number={number} key={index} changeDisplay={props.changeDisplay} />
       })}
    </div>
  );
};

export default Numbers;

//- Map over the data and dynamically render components for each piece of data in the arrays.
//- You will need to import the component that you'll render in the map function.