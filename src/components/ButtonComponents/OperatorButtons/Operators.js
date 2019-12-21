import React, { useState } from "react";

import { OperatorButton } from "./OperatorButton";

import { operators } from "../../../data";

export const Operators = () => {
  const [operatorState, setOperatorState] = useState(operators);
  return (
    <div>
      {operatorState.map((operate, index) => {
        return <OperatorButton ops={operate} key={index} />;
      })}
    </div>
  );
};
