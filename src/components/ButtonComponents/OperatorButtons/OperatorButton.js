import React from "react";


const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button className="operator_button">{props.displayOpr.char}
      </button>
        
      }
    </>
  );
};

export default OperatorButton;