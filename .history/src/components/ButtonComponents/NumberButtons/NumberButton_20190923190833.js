import React from "react";

export default function NumberButton(props) {
  return (
    <>
      <button key={props.key}>{props.num}</button>
    </>
  );
};
