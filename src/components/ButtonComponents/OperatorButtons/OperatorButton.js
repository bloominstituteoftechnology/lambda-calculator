import React from "react";

const OperatorButton = props => {
  // console.log(props.value.char);
  return (
    <button className = 'operateButt'>
      {props.value.char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;