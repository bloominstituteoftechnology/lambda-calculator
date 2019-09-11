import React from "react";

const SpecialButton = () => {
  return (
    <>
      <button className="special-button">
        <span role="special button" aria-label="special button">
          <button className="special-button">
            <span role="special symbols" aria-label="special symbols">
              {props.specials}
            </span>
          </button>
        </span>
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton;