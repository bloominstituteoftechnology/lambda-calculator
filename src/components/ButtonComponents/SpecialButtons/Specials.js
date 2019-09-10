import React, {useState} from "react";
import SpecialButton from './SpecialButton.js';
import { specials } from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specChar] = useState(specials);
  return (
    <div>
      {specChar.map((specials, index) => (
        <SpecialButton key={index} specials={specials} />  
      ))}
    </div>
  );
};

export default Specials;
