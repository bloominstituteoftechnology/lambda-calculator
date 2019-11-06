import React, {useState} from "react";
import SpecialButton from "./SpecialButton";
import {specials} from '../../../data.js';
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  const[numberSpecials] = useState(specials);
  return (
    <div className="specialContainer">
      {numberSpecials.map((special, index) => (
        <SpecialButton  key={`specials-${index}`} special = {special}  />
        ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
        component matching the name on the provided file. Pass
      it any props needed by the child component*/}
    </div>
  );
};


export default Specials;