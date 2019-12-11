import React, { useState } from "react";
import SpecialButton from "./SpecialButton";
import {specials} from "../../../data";

const Specials = (props) => {
  const [specialsButton, setSpecialsButton] = useState(specials);

  return (
    <div>
      {specialsButton.map(special => {
          return <SpecialButton text={special} addSpecial={props.special} />
      })}
    </div>
  );
};
export default Specials;
