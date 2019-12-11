import React, { useState } from "react";
import OperatorButton from "./OperatorButton.js";
import {operators} from "../../../data"

const Operators = (props) => {
  return (
    <div>
      {operators.map(operator => {
          return <OperatorButton operator={operator} addOperator={props.addOperator} />
      })}
    </div>
  );
};

export default Operators;