import React from "react";

export default function SpecialButton(props) {
  return (
    <>
      <button className="button specialBttn"  onClick={() => props.clickFunction(props.special)} key={props.key}>{props.special}</button>
    </>
  );
};
