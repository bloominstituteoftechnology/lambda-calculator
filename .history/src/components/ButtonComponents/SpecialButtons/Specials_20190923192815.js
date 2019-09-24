import React, {useState } from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialValue, setSpecial] = useState(specials);
  return (
    <div>
      {specialValue.map((char, index) => (
        <SpecialButton key={ index } special={ char } />
      ))}
    </div>
  );
};
export default Specials;