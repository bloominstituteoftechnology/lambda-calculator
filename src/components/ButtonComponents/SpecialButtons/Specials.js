import React, { useState } from "react";
import { specials } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [special, setSpecial] = useState(specials)
  console.log({special});
  return (
    <div className="specials">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      <p>Specials</p>
      {special.map((special) => {
       return <button className="specialButton" key={special}> {special} </button>;
      })}
    </div>
  );
};

export default Specials;
