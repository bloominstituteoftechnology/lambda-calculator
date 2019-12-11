import React, {useState } from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialValue, setSpecial] = useState(specials);
  return (
    <div>
      {specialValue.map((char, index) => (
        <SpecialButton clickFunction={ props.clickFunction }  key={ index } special={ char } />
      ))}
    </div>
  );
};
export default Specials;