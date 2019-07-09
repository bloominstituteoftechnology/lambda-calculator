import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className = "special">{props.special}</div>
    </>
  );
};

export default SpecialButton;