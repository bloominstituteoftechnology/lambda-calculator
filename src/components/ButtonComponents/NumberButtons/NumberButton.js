import React, {useState} from "react";
import {NumberButton} from '../../../data';
import {NumberButton} from '../NumberButton';
//import { tsPropertySignature } from "@babel/types";

const NumberButton = props => {
  console.log(props);
  return (
    <button>
    <span>{props.button.value}</span>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      </button>
  );
};
export NumberButton;