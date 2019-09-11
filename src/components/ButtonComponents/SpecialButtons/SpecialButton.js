import React from "react";

const SpecialButton = (props) => {
  console.log(props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="button special-button">
      {props.char}
      </button>
    </>
  );
};


export default SpecialButton;