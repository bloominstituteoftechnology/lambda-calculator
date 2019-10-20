import React from "react";

export const SpecialButton = props => {
  console.log(props);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="special-buttons">{props.characters}</button>
    </>
  );
};
