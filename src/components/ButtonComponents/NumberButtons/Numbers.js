import React, {useState} from "react";
import NumberButton from './NumberButton';
import numbers from '../../../data';
//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state 
  const [calNumbers, setNumber] = useState(numbers);
  console.log(calNumbers)
 
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {calNumbers.map( (number, index) => <NumberButton key={index} number={number} changeData={props.changeData} />)}
    </div>
  );
};

export default Numbers;