import React, { useState } from "react";
import { specials } from './../../../data.js';
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  const [spec] = useState(specials)
  // STEP 2 - add the imported data to state

  return (
    <>
    {spec.map((e, i) => {
      return <SpecialButton setCalc={props.setCalc} calc={props.calc} key={i} id={i} spec={e} />
    })}
    </>
    

    //   {/* STEP 3 - Use .map() to iterate over your array data and return a button
    //    component matching the name on the provided file. Pass
    //    it any props needed by the child component*/}
  );
};

export default Specials
