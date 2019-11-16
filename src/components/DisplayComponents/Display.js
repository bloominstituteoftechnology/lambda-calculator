import React from "react";
import Numbers from '../ButtonComponents/NumberButtons/NumberButton';

const Display = (props) => {
  return <div className="display">{/* Display any props data here */props.display}</div>;
};

export default Display;