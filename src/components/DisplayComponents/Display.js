import React, {useState} from "react";

const Display = (props) => {
  console.log(props)
  return <div className='displayContainer'>
            {props.value}
          </div>;
};

export default Display;