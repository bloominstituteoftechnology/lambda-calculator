import React from "react";

const SpecialButton = props => {
  const { setDisplay, display, special } = props;

  const handleClick = special => {
    if (special === "C") {
      return setDisplay("0");
    }

    return false;
  };

  return (
    <React.Fragment>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button
        onClick={() => {
          handleClick(special);
        }}>
        {special}
      </button>
    </React.Fragment>
  );
};

export default SpecialButton;
