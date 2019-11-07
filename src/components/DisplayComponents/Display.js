import React from "react";

const Display = props => {
  console.log(props)
  return (
  <div className="display">
    <span>
      {props.total}
    </span>
  
  </div>
)
}

export default Display;