import React from "react";

export default function NumberButton(props) {
  return (
    <>
      <button className="button numberBttn" key={ props.key }>{ props.num }</button>     
    </>
  );
};
