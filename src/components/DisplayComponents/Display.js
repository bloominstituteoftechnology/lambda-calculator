import React from "react";

const display = (props) => {
  return <div className="display">
  {/* Display any props data here */}
    {props.number}
  </div>;
};

export default display;
