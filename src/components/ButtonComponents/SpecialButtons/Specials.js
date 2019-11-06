import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";


//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  const [specialState, setSpecialState] = useState(specials);

  return (
    <div>
    {specialState.map((button, index) => (
      <SpecialButton
      button={button}
      key={index}
      />
    ))}
    </div>
  );
};
