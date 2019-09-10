import React, {useState} from "react";
import { specials } from "../../../data"
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  const [specialsState] = useState(specials)
  return (
    <div className ="specials-div">
      { specialsState.map((specials, index) => (
        <SpecialButton key = {index} specials={specials} />
      ))}
    </div>
  );
};

export default Specials
