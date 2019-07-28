import React from "react";

//import any components needed

//Import your array data to from the provided data file
import {numbers , operators ,specials } from '../../../data.js'
const Specials = () => {
  // STEP 2 - add the imported data to state
  console.log('this is specials' , specials)

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
   {
     specials.map(special => {
       return(
         <button>{special}</button>
       )
     })
   }
    </div>
  );
};

export default Specials;