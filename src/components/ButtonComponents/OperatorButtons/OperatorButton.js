import React from "react";
import { operators } from "../../../data";


export const OperatorButton = (props) => {

  function handleClickEvent() {
    props.consoleLog(props.number)
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button
        onClick={() => props.setDisplayValue(props.operator)}
        >
        {props.operator}
      </button>}
    </>
  );
};
