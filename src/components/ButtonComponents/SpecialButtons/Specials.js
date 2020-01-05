import React, {useState} from "react";
import {specials} from "../../../data.js";
import SpecialButton from "./SpecialButton.js";

const Specials = () => {
  const [specState] = useState(specials);

  return (
    <div>
      {specials.map((spec, index)=>(
        <SpecialButton specialSymbol={spec} key={index} />
      ))}
    </div>
  );
};
export default Specials;
