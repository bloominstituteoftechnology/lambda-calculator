import React from "react";

const NumberButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    <button className="button" onClick={() => 
    props.setValue(props.button)}>
    </button>
    </>
  );
};

export default NumberButton