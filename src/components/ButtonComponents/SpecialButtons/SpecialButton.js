import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button className = "special_button" >
        <span role = "special button" aria-label = "special button">
          {props.specials}
        </span>
      </button>
    </>
  );
};

export default SpecialButton;