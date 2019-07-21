import React, { useState } from "react";
import Operators from "./Operators";

const OperatorButton = (props) => {
  return (
    <div>
      <button className="btn operator-btn" onClick={ () => props.operatorClick( props.opFunc ) }>{props.operatorsMapped}</button>
    </div>
  );
};

export default OperatorButton;