import React, {useState} from "react";
import {specials} from "../../../data";
import SpecialButton from "./SpecialButton"

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState] = useState(specials)
  return (
    <div>
      <div className="specials">
      {specialState.map((number, index) => (
        <SpecialButton key={index} button={number} displayChanger={props.displayChanger}/>
      ))}
      </div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials