import React from "react";

const NumberButton = props => {
  let button;

  if(props.number !== '0'){
    button = <button className="button darkblue" onClick={ () => props.fnc(props.number)}>{props.number}</button>;
  } else {
    button = <button className="bigbutton darkblue" onClick={ () => props.fnc(props.number)}>{props.number}</button>;
  }
  return (
    <>
      {button}
    </>
  );
};

export default NumberButton;