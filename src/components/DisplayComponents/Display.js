import React from "react";

const Display = (props) => {
  console.log('display', props, props.number);
  return <div className='display'>
    {props.number}
  </div>;
};

export default Display;