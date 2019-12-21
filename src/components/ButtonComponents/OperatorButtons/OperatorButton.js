import React from "react";
import {operators} from "../../../data"
import Operators from "./Operators"

const OperatorButton = () => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.data.map((operators, index) => <button key="{index}">{operators.value}</button>)}
    </button>
  );
};
