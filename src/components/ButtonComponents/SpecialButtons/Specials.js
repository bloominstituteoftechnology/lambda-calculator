import React, {useState} from "react";
import {specials} from '../../../data';
import SpecialButton from './SpecialButton';

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  const [commands] = useState(specials)
  // STEP 2 - add the imported data to state

  return (
    <>
      {commands.map((command, idx) => {
        return <SpecialButton key ={idx} command={command} />
      })}
    </>
  );

};

export default Specials;