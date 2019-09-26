import React, { useState } from "react";
import { specials } from '../../../data';
import SpecialButton from './SpecialButton';
//import any components needed

//Import your array data to from the provided data file
const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [ourSpecials, setSpecials] = useState(specials);
  const specialsMapped = ourSpecials.map(elements => elements);

  return (
    <div className="special-buttons-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {ourSpecials.map(info => (
        <SpecialButton key={info} specialsMapped={info} specialButtonClick={props.value} />
      ))}
    </div>
  );
};

export default Specials;