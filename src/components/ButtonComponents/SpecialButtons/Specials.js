import React from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file

const Specials = ({ callback }) => {
  // STEP 2 - add the imported data to state

  return (
    <div className="specials">
      {specials.map((special, index) => (
        <SpecialButton key={index} callback={callback} special={special} />
      ))}
    </div>
  );
};

export default Specials;