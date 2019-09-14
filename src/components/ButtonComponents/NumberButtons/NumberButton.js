import React from "react";
//import { numbers } from "../../../data";

const NumberButton = ({character}) => {
  let btnClass = "btn"
  if(character ===  "0") btnClass = "btn-lg"
  return <button className={btnClass}>{character}</button>
};

export default NumberButton;