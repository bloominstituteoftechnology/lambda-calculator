import React, { useState } from "react";
//import any components needed
import SpecialButton from './SpecialButton'
//Import your array data to from the provided data file
import { specials } from './../../../data'

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsState, setSpecialsState] = useState(specials);
  console.log('specials', { specialsState });
  
  return (
    <div>
                    {
          specialsState.map((special, index) => (
          <SpecialButton specials={special} key={index} />
       ))}
    </div>
  );
};

export default Specials;