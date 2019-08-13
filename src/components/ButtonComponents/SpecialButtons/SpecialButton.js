import React from "react";

const SpecialButton = (props) => {
  const {special} = props
  return (
    <button className="btn">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {special}
    </button>
  );
};

export default SpecialButton;
