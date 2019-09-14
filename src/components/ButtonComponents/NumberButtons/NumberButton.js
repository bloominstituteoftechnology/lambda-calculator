import React from "react";
//import { numbers } from "../../../data";

const NumberButton = ({character, addCharacter}) => {
  let btnClass = "btn";
  if(character ===  "0") btnClass = "btn-lg";
  return <button onClick={addCharacter} className={btnClass}>{character}</button>
};

export default NumberButton;