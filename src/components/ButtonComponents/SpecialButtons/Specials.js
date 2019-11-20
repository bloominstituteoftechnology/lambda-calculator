import React, {useState} from "react";
import {specials} from '../../../data';
import SpecialButton from './SpecialButton.js';

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  const [specialArr, setSpecialArr] = useState(specials)
  // STEP 2 - add the imported data to state

  return (
    <div>
      <div className = 'mySpecials'/> 
        {specialArr.map((special, index) => (
          <SpecialButton key = {index} special = {special}/>
        ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials;