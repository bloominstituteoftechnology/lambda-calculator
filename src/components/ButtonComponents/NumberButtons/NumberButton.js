import React, {useState} from "react";
import {numbers} from '../../../data';

const NumberButton = () => {
  const {number, saveNumber} = useState(numbers);
  return (
    <>
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button key = {number} onClick = {() => saveNumber(number)} >{number}</button>
      </div>
    </>
  );
};

export default NumberButton;