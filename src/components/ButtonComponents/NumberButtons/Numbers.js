import React, {useState} from "react";
import data from "../../../data";
import NumberButton from "./NumberButton";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numState] = useState(data.numbers);
  console.log(numState);


  return (
    <div class="numbers-container">
    
       {numState.map((number,index) => {
        if (number === '0' || number === '.'){
          console.log("special number");
        return <NumberButton className="button number-special" number={number} value={index}/>
      } else {
        console.log("normal number");
        return <NumberButton className="button number-button" number={number} value={index}/>

      }

       })}

    </div>
  );
};

export default Numbers;




  
