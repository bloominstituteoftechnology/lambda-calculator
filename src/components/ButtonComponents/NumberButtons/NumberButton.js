import React from "react";

// let btnClass = "btn"
// if(character ===  "0") btnClass = "btn-lg"
// return <button className={btnClass}>{character}</button>

// const NumberButton = (props) => <button className="btn btn-number">{props.character}</button>;

const NumberButton = ({character}) => {
  let btnClass = "btn"
  if(character ===  "0") btnClass = "btn-lg"
  return <button className={btnClass}>{character}</button>
};

export default NumberButton;