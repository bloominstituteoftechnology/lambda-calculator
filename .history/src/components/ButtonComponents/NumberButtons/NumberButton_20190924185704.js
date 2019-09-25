import React from "react";

export default function NumberButton(props) {
  return (
    <>
      <button onClick={() => props.setValue(props.num)} className="button numberBtn" key={props.key}>{props.num}</button>  
    </>
  );
};
