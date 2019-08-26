import React, { useState } from "react";
import { numbers } from '../../../data';
import NumberButton from './NumberButton';


//import any components needed

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [setNumber] = useState(numbers)
  
  return (
    <div>
      {setNumber.map(item => {
        return <NumberButton className='NumberButton' item={item} addNumber={props.addNumber} />
      })}
       {/* STEP 3 - Use .map() to iterate over your array data and return a button
      //  component matching the name on the provided file. Pass
      //  it any props needed by the child component*/}
    </div>
  );
};


export default Numbers;


// return (
//   <div>
//     {setNumber.map(number => <NumberButton text={number} />)}
//   </div>
// )