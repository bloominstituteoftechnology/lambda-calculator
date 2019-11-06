import React from "react";
import {operators} from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {number.map((item, index) => (
        <OperatorButton key={index} button={item.char}/>
      ))}
    </div>
  );
};
