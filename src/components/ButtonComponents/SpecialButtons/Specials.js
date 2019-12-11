import React, {useState} from "react";
import { specials } from "../../../data";
import {SpecialButton} from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

export const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsState, setSpecialsState] = useState(specials)
  return specialsState.map(spec => (
    <div>
      <SpecialButton special={spec} />
    </div>
  ));
};
