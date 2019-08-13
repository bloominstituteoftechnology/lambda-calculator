import React from "react";
import {specials} from "../../../data.js";
import SpecialButton from "./Specials";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state

  // let specialFigures = specials.map(character => {
  //   return <SpecialButton character={character}/>
  // })
  return (
    console.log(specials),
    <div>

      <SpecialButton character="Your mom"/>
      {/* {specialFigures} */}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials;