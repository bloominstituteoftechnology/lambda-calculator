import React from "react";


export default function OperatorButton(props) {
  return (
    <>
      <button className="button operatorBttn" key={ props.key }>{ props.operator.char}</button>
    </>
  );
};
