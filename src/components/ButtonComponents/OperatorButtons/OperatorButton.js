import React from "react";

const OperatorButton = (props) => {
  //console.log(props)
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operatorBtn.value}
    </button>
  );
};
export default OperatorButton;
