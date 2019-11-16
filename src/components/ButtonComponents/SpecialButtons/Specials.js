import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from './SpecialButton'
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [spec] = useState(specials);
  //console.log(spec);

  const handlerSpecial = (special) => {
    //console.log(special);
    props.setState(special);
  }

  return (
    <div>
       {spec.map((spec, index) => (
        <SpecialButton handlerSpecial={handlerSpecial} key={index} special={spec} />
      ))}
    </div>
  );
};
export default Specials;
/* STEP 3 - Use .map() to iterate over your array data and return a button
component matching the name on the provided file. Pass
it any props needed by the child component*/