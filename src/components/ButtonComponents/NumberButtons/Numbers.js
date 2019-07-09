import React, {useState} from "react";

//import any components needed
import NumberButton from './NumberButton';
//Import your array data to from the provided data file
import {numbers} from '../../../data';

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberz, setNumbers] = useState(numbers);
  return (
    <div className = "numbers">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numberz.map(number => {
         return (
           <NumberButton 
              key = {Math.random()}
              number = {number} 
              firstNum = {props.firstNum}
              setFirstNum = {props.setFirstNum}
              secondNum = {props.secondNum}
              setSecondNum = {props.setSecondNum}
              firstNumGiven = {props.firstNumGiven}
              setFirstNumGiven = {props.setFirstNumGiven}
            />
         )
       })}
    </div>
  );
};

export default Numbers;