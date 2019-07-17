import React, {useState} from "react";
import SpecialButton from './SpecialButton.js';

import {specials} from '../../../data';
//import any components needed

//Import your array data to from the provided data file
/* {STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component}*/
const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);
  return (
    <div>
       {specialState.map((special, index) => <Specials key={index} specialContent={special} value={special} />)}
    </div>
  )
};

export default Specials;
