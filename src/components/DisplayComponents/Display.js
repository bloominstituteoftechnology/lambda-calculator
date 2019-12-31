import React from "react";
import Computation from '../DisplayComponents/Computation';

const Display = (props) => {
  const {value, calcState}  = props;
  return (
    <div className="display">
      <Computation value={calcState} />
      <div className="display-text">{value}</div>
    </div>
  );
};

export default Display;