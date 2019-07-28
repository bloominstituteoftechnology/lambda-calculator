import React from "react";

//import any components needed

//Import your array data to from the provided data file
import {numbers , operators ,specials }  from '../../../../src/data';
const Operators = () => {

  console.log('this is the oprater.js',operators)
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {
         operators.map (operator => {
           return(
             <div>
             <button>{operator.char}</button>
             <button>{operator.value}</button>
             </div>
           )
         })
       }
    </div>
  );
};

export default Operators;