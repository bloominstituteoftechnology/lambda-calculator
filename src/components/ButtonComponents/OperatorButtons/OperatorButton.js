import React from "react";

export const OperatorButton = (props) => {
  console.log(props);
  return (
    <>
      <button>
        {props.oper}
      </button>
    </>
  );
};
