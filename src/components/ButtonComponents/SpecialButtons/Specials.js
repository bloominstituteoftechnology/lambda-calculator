import React, { useState } from "react";
import { specials } from "../../../data.js";
import SpecialButton from "./SpecialButton.js";

const Specials = () => {
  const specialsState = useState(specials)[0];
  return (
    <div className="specials">
      {
       specialsState.map((spec, index) => {
        return <SpecialButton value={spec} key={spec} label={spec} />
       })
      }
    </div>
  );
};

export default Specials;
