import React, {useState} from "react";
import SpecialButton from './SpecialButton.js'
//import any components needed

//Import your array data to from the provided data file
import { specials } from '../../../../src/data.js'
import { tsPropertySignature } from "@babel/types";

const Specials = () => {
  const [special, setSpecial] = useState(specials)

  return (
    <div>
      {special.map(xSpecial => {
        return <SpecialButton text={xSpecial} addSpecial = {tsPropertySignature.addSpecial}/>
      })}
    </div>
  );
};

export default Specials;