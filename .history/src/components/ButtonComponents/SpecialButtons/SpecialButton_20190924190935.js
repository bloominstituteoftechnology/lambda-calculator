import React from "react";

export default function SpecialButton(props) {
  return (
    <>
      <button onClick={() => props.clickFunction(props.special)} className="button specialBttn"   key={props.key}>{props.special}</button>
    </>
  );
};
