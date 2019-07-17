import React from "react";


const SpecialButton = (props) => {
  return (
    <button className = "specialButton">
      {props.specialContent}
    </button>
  );
};

export default SpecialButton;
