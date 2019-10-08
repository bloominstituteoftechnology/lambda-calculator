import React, {useState} from "react";
import {Specials} from '../../../data';
import {Specials} from '../SpecialButtons';
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  const [specialState, setSpecialsState] = useState(Specials);
  // STEP 2 - add the imported data to state
  return (
    <div>
      <div className = 'mySpecials' />
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specialState.map((button, index) => (
         <SpecialsButton key={index} button = {button}/>
       ))}
    </div>
  );
};
export Specials;