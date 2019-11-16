import React from "react";

export const OperatorButton = (props) => {
  console.log(props);
  return (
    <button
    onClick={() => {}}
    className="opr-btn"
    >
      <p>{props.operator1}</p>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
 {/* <span>{props.buttonOperatorData.value}</span>*/}
    </button>
  );
};
