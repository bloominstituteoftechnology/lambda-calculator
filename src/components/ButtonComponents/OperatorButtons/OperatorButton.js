import React from "react";


const OperatorButton = (props) => {
  return (
    <div>
      <button className="btn operator-btn" onClick={() => props.operatorClick(props.opFunc)}>{props.operatorsMapped}</button>
    </div>
  );
};

export default OperatorButton;
