import React from "react";

//import any components needed
import SpecialButton from "./SpecialButton";
//Import your array data to from the provided data file
import { specials } from "../../../data";


const Specials = props => {
  // STEP 2 - add the imported data to state

  return (
     <div className="special-container">
      {specials.map(special => (
        <SpecialButton key={special} specials={special} />
        ))}
    </div>
  );
};
export default Specials;