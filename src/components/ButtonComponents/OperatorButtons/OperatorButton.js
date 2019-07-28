import React from "react";

const OperatorButton = (props) => {
  return (
    // <>
    //   {/* Display a button element rendering the data being passed down from the parent container on props */}
    // </>
    <div>
    <button>{props.btn.char}</button>
    <button>{props.btn.value}</button>
    </div>
  );
};
export default OperatorButton;