import React from "react";
import {specials} from '../../../data.js';
import {SpecialButton} from './SpecialButton';

//import any components needed

//Import your array data to from the provided data file

export const Specials = () => {
  // STEP 2 - add the imported data to state
    const [Spesh, setSpesh] = React.useState(specials);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {Spesh.map((sp, i) =>{
         return <SpecialButton spec={sp} key={i}></SpecialButton>
       })}
    </div>
  );
};