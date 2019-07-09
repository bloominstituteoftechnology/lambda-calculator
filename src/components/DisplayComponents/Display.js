import React from "react";

const Display = (props) => {
  return (
    <div> 
      {props.calculated 
      ? (<div>{props.calculation}</div>) 
      : (<div>
          <span>{props.firstNum}</span>
          <span>{props.operator}</span>
          <span>{props.secondNum}</span>
         </div>
        )} 
      
    </div>
  );
};

export default Display;