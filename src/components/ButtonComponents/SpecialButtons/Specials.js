import React, {useState, useEffect} from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data.js";

//import any components needed

//Import your array data to from the provided data file

const Specials = props => {
  // STEP 2 - add the imported data to state
  const [especial, setEspecial] = useState(specials);
  console.log(especial);
  
  useEffect(() => {
    setEspecial(specials);
    // STEP 2 - add the imported data to state
  }, [])

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {
         especial.map(es => (

          <SpecialButton es={es}/>)
         )}
    </div>
  );
};

export default Specials;
