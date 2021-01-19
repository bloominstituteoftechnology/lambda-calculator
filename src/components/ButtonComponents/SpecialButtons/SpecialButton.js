import React from "react";

const SpecialButton = props => {
  return (
    <button className="button special-button">
      {props.special}
    </button>
  );
};

export default SpecialButton;