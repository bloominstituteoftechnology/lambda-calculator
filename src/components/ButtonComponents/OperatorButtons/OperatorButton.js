import React from "react";

export const OperatorButton = (props) => {
  return (
    <button className='operator-button'>
      {props.op}
    </button>
  );
};
