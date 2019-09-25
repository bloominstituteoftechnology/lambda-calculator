import React from "react";

export default function SpecialButton(props) {
  return (
    <>
      <button className="button specialBttn" key={props.key}>{props.special}</button>
    </>
  );
};
