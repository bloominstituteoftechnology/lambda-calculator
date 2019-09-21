import React from "react";

const SpecialButton = (props) => {
  return (
    <button
    onClick={() => props.setSpecialState(props.dataSpecial)}
    >
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
