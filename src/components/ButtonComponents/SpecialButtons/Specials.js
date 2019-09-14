import React from "react";
import { specials } from '../../../data';
import SpecialButton from './SpecialButton';

//import any components needed

const Specials = ({addCharacter}) => {
  // STEP 2 - add the imported data to state

  return (
    <div className="specials">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {
         specials.map(character => <SpecialButton key={character} addCharacter={()=>addCharacter(character)} character={character} />)
       }
    </div>
  );
};

export default Specials