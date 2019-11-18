import React from "react";

const SpecialButton = (props) => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="btn specials-btn" onClick={() => props.specialButtonClick(props.specialsMapped)}>{props.specialsMapped}</button>
    </div>
  );
};

export default SpecialButton;