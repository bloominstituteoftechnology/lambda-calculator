import React from "react";

const SpecialButton = props => {
  return (
    <button className= "specials_button">
      {props.bSpecial}
    </button>
  );
};

export default SpecialButton;
/* Display a button element rendering the data being passed down from the parent container on props */
