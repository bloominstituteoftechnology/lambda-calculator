import React from "react";

const OperatorButton = (props) => {
console.log("this is props",props)
  return (
    <button className="operators-btn" onClick={() => props.operators()}>
      
      {/* Display a button element rendering the data being passed down from the parent container on props */
      
      props.result
      
      }
    </button>
  );
};




export default OperatorButton;