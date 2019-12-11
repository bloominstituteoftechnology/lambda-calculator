import React, {useState} from "react";
import OperatorButton from "./OperatorButton";
import {operators} from "../../../data"

const Operators = (props) => {
  const [operatorButton, setOperatorButton] = useState(operators);

  return (
    <div>
      {operatorButton.map(operator => {
          return <OperatorButton operator={operator} addOperator={props.addOperator} />
      })}
    </div>
  );
};

export default Operators;
