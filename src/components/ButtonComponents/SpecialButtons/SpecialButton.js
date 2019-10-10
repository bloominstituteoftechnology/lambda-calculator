import React, {useState} from "react";
//import {SpecialButton} from '../SpecialButton';
//import {SpecialButton} from '../../../data';
//import { tsPropertySignature } from "@babel/types";

const SpecialButton = (props) => {
  return (
    <div className ="button-container">
      <button className="button">
      {props.button}
    </button>
    </div>
  );
};
export default SpecialButton;