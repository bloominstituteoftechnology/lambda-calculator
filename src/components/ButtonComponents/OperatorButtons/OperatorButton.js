import React from "react";
import { operators } from "../../../data";

export const OperatorButton = props => {
  console.log(`OperatorButton:`, props); // Always before return statement
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className ="operator-buttons">{props.ops.char}</button>
    </>
  );
};
