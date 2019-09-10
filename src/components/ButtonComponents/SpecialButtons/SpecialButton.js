import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button className="special_button">
        <span role = "special symbols" aria-label = "special symbols">
          {props.specials}
        </span>
      </button>
    </>
  );
};

export default SpecialButton;