import React from "react";

const Display = (props) => {
  return <div className="display" onChange={props.handleDisplay()}>{props.display}</div>;
};
export default Display;