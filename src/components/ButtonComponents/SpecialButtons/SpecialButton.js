import React from "react";

const SpecialButton = (props) => {
  const { specialButton } = props;

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="special-btn">{specialButton}</button>
    </>
  );
};

export default SpecialButton;