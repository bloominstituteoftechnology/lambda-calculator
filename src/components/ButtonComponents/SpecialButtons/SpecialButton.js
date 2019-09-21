import React from "react";


export const SpecialButton = (props) => {
  console.log(props);
  return (
    <button
    onClick={() => {}}
    >
      <p>{props.special1}</p>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
