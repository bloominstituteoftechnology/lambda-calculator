 import React, { useState } from "react";
 import { numbers } from "../../../data"
 import  NumberButton  from "./NumberButton"

 //import any components needed
 // example of import from data.js. Note all the ../   This is how we move through folders. 
 //Import your array data to from the provided data file


   // STEP 2 - add the imported data to state
 const Numbers = (props) => {
   const [numberState, setNumberState] = useState(numbers);
   return (
     <div className ="numbersContainer">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
//        component matching the name on the provided file. Pass
//       it any props needed by the child component*/}
     
       {numbers.map((number, idx) => {
         return (
           <NumberButton
             key={idx}
             number={number}
             setDisplayValue={props.setDisplayValue}
           />
      )
       })}
     </div>
   );
 }
 export default Numbers;

