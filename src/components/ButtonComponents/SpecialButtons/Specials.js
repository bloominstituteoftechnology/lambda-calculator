import React, {
  useState
} from "react";
import {
  specials
} from '../../../data';
//import any components needed
import SpecialButton from "./SpecialButton";
//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);

  return (
    /* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/
    specialState.map((button, index) => ( 
      <SpecialButton key = { index } buttonText = {button} buttonValue = {button} clickHandler = {props.btnClickHandler} />
    ))
  );
};

export default Specials;