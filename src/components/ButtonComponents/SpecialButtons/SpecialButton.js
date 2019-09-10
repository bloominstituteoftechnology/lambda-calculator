import React from "react";

const SpecialButton = props => {
  return (
    <button className="button">
      {props.special}
    </button>
  );
};

export default SpecialButton;