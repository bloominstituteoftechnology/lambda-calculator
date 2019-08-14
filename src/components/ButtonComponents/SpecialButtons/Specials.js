
import React, { useState } from "react";

//import any components needed
import SpecialButton from "./SpecialButton";
//Import your array data to from the provided data file
import { specials } from "../../../data"

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specState, setSpecState] = useState(specials);

  return (
    <div className="special_container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      { specState.map( item => 
        <SpecialButton specProp={item}/>
      )}


    </div>
  );
};

export default Specials;
