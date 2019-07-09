import React, {useState} from "react";

//import any components needed

import SpecialButton from "./SpecialButton"


//Import your array data to from the provided data file

import { specials } from "/Users/lauradaugherty/Lambda Projects/lambda-calculator/src/data.js"


const Specials = () => {
  const [] = useState( [specials] )

  // STEP 2 - add the imported data to state

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}


        {specials.map((special) => { 
          return (
            <SpecialButton key={special} special={special}/>
        )
        })}
    </div>
  );
};

export default Specials
