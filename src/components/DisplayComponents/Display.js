import React from "react";

const Display = props => {
  return (
    <div className='display'>
      <span>{props.displayValue}</span>
    </div>
  );
};

export default Display;
