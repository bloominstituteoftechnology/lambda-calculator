import React from "react";

const SpecialButton = (props) => {
  return (
    <button className = 'SpecialButtonStyle'>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.specials
      }
    </button>
  );
};

export default SpecialButton;