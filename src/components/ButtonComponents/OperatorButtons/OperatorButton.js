import React from "react";


const OperatorButton = (props) => {
  const {operator} = props
  return (
    <button className="btn">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {operator.value}
    </button>
  );
};

export default OperatorButton;