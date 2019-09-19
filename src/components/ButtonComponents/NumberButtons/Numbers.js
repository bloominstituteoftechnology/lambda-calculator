import React, { useState } from "react";
import { numbers } from '../../../data';

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [number, setNumber] = useState(numbers);
  return (
    <div style={{width: '300px', justifyContent: 'center' }} >
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {numbers.map( (number, index) => {
         if (index === 9) {
           return <button key={index} id="zero" className="buttons numbers">{number}</button>
         }
          return <button key={index} className="buttons numbers">{number}</button>
       })}
    </div>
  );
};
export default Numbers;