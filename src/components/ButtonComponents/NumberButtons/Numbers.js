import React, { useState } from "react";
import { numbers } from '../../../data.js';
import NumberButton from './NumberButton';
//import any components needed

//Import your array data to from the provided data file


const Numbers = () => {

  
  
  return (

    <div> {
      numbers.map((number) => {
    console.log("Numbers were mapped correctly");
    return <NumberButton number = {number}
     />
    
  })}
    </div>
  );
};

export default Numbers;

