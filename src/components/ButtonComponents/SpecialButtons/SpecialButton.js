import React, {useState} from "react";
import {SpecialButton} from '../SpecialButton';
import {SpecialButton} from '../../../data';
import { tsPropertySignature } from "@babel/types";

const SpecialButton = props => {
  return (
    <button>
    <span>{props.button.value}</span>

      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
export SpecialButton;