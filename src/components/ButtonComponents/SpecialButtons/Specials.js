import React, { useState } from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";
//import any components needed

//Import your array data to from the provided data file

const Specials = props => {
  const [specialArray, setSpecialArray] = useState(specials);
  // STEP 2 - add the imported data to state

  return (
    <div>
      {specialArray.map((specialIcon, index) => (
        <SpecialButton key={index} specialIcon={specialIcon} />
      ))}
    </div>
  );
};
export default Specials;
