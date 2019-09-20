import React from "react";

const SpecialButton = props => {
  return (
    <React.Fragment>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.special}</button>
    </React.Fragment>
  );
};

export default SpecialButton;
