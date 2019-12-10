import React from "react";

const OperatorButton = () => {
  return (
    <>
    <button className="operator-button">
      {/* <span role="img" aria-label="heart"> */}
        {props.button.value}
      </span>
    </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;