import React from "react";

const OperatorButton = (props) => {
  return (
    <div>
      <button onClick={() => props.displayChanger(props.button.char)}>
        {props.button.char}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};

export default OperatorButton