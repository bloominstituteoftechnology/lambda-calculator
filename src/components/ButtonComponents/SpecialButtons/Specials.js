import React, { useState } from "react";
import SpecialButton from './SpecialButton';
//import any components needed

//Import your array data to from the provided data file
import { specials } from '../../../data';
const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsState, setSpecialsState] = useState(specials);
  return (
    <div className="specContent">
      {specials.map(e => <SpecialButton buttonContent={e} />)}
    </div>
  );
};
export default Specials;
