import React from "react";

const Display = ({ displayValue }) => {
  // return <div>{/* Display any props data here */}</div>
  return (
    <input
      className="calculatorScreen"
      value={displayValue}
      type="text"
      disabled
    />
  );
  // return <div>{displayValue}</div>;
};

export default Display;
