import React from "react";


export default function OperatorButton(props) {
  return (
    <>
      <button key={ props.key }>{ props.operator.char}</button>
    </>
  );
};
