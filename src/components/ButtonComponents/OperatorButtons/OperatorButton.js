import React, { useState } from "react";
import Operators from "./Operators";

const OperatorButton = (props) => {
  return (
    <div>
      <button>{props.operatorsMapped}</button>
    </div>
  );
};

export default OperatorButton;