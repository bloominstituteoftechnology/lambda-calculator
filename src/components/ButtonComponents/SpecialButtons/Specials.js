import React from "react";
import SpecialButton from './SpecialButton.js';
import { specials } from '../../../../src/data.js';

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state

  return (
    <div>
      {specials.map(calcSpecial => {
        return <SpecialButton key={calcSpecial} text={calcSpecial} addSpecial = {props.addSpecial}/>/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      })}
    </div>
  );
};

export default Specials;
