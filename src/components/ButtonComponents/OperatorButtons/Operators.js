import React from "react";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data";

const Operators = (props) => {
  return (
    <div className="operatorContainer">
      {
        operators.map(operator => OperatorButton(operator['char'], operator['value'], props.onClickOperator))
      }
    </div>
  );
};

export default Operators;