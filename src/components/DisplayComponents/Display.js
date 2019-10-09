import React, { useState } from "react";

const Display = props => {
  return (
    <div className="display">
      {props.numberDisplay}
      {props.operatorDisplay}
    </div>
  );
};

export default Display;
