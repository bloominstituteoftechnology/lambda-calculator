import React from "react";

export const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.spec}</button>
    </>
  );
};
