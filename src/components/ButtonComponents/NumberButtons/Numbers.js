mport React, { useState } from "react";
import { numbers } from './../../../data.js';
import NumberButton from './NumberButton.js';

//import any components needed

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state

  const [num] = useState(numbers)
  // console.log(num)

  return (
    <>
      {num.map((e, i) => {
        return <NumberButton key={i} id={i} num={e} calc={props.calc} setCalc={props.setCalc} />
      
      })}
      
    
    </>
  );

};

export default Numbers

  {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component */}