import React from "react";

const Display = (props) => {

  console.log('display', props)


  return <div className="display" onChange={props.handleDisplay()}>{props.display}</div>;
};
export default Display;