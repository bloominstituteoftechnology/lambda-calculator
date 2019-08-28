import React from "react";

// props is always an object
const Display = (props) => {
  return <div className='display'>
  {/* Display any props data here. need {} to get a JS environment within JSX ex:{props.number} */}
  {props.number}
  </div>;
};

export default Display;