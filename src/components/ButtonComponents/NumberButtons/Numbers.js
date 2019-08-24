import React, {useState} from "react";

//import any components needed
import NumberButton from './NumberButton';
import {numbers} from '../../../data'


//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [buttonNumbers, setNumberButton] = useState(numbers)
  return (
    <div>
      {buttonNumbers.map(numbers => <NumberButton key = {numbers} text = {numbers} addNumber = {props.addNumber} />)}
      
    </div>
  );
};
export default Numbers