import React, { useState } from "react";
import { specials } from '../../../data';
import SpecialButton from './SpecialButton';


const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialButtons, setSpecialButton] = useState(specials);

  return (
    <div className="specials-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specialButtons.map((button, index) => (
         < SpecialButton key={index} specialButton={button} / >
       ))}
    </div>
  );
};

export default Specials;
