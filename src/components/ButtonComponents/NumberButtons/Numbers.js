import React , {useState} from "react";

//import any components needed

//Import your array data to from the provided data file
import {numbers , operators ,specials }  from '../../../data.js';

const Numbers = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numbers.map(num => {
         return(
           <button>{num}</button>
         )
})}
    </div>
  );
};

export default Numbers ;
