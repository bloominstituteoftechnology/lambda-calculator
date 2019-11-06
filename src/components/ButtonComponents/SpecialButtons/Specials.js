import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "../SpecialButtons/SpecialButton";

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [spec] = useState(specials);
  return (
    <div className="specBtns">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      spec.map((item, index) => (
        <SpecialButton key={index} char={item} />
      ))}
    </div>
  );
};

export default Specials;
