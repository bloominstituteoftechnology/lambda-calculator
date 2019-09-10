import React from "react";

//import any components needed
import { specials } from "../../../data";
//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state

  return (
    <div>
      {specials.map(specials => {
        return <button className="special-btns"> {specials} </button>;
      })}
    </div>
  );
};

export default Specials;
