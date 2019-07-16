import React, { useState } from 'react';

//import any components needed

// Question 1: Do I need to install sass? is something supposed to be displaying?
// Question 2: Am I going about this the right way?


//Import your array data to from the provided data file
import { numbers } from './src/data.js';// Question 3: is this path name right? path relative to what?

console.log(numbers);
const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbers, setNumbers] = useState();
  return (
    <div>
      { //STEP 3 - Use .map() to iterate over your array data and return a button
       //component matching the name on the provided file. Pass
       //it any props needed by the child component
       
      
       const numberButtons = numbers.map(element => {
         `<button>${element}</button>`
       });
       
       
       }

    </div>
  );
};
