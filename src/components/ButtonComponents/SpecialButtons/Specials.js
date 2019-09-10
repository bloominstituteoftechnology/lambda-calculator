import React, {useState} from "react";
import { specials } from "../../../data"
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  const [specialState] = useState(specials);

  return (
    <div>
      {specialState.map((specials, index) => (
        <SpecialButton key = {index} specials = {specials} />
      ))}
    </div>
  );
};

export default Specials
