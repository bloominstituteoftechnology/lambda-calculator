import React from "react";

const Display = (props) => {
  return (
    <div className="display">
      {/* Display any props data here */}
      {props.total}
    </div>
  );
};

export default Display;
