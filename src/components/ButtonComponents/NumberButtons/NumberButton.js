import React, {useState} from "react";
import { numbers } from "../../../data";

export const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button className="NumberButton">{props.displayNumber}</button>
      }
    </>
  );
};

export default NumberButton;
