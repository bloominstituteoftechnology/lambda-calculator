import React from "react";

export default function SpecialButton(props) {
  return (
    <>
      <button key={props.key}>{props.special}</button>
    </>
  );
};
