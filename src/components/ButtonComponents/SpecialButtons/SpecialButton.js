import React from "react";

const SpecialButton = (props) => {
  return (
    <>
     <button className="special-button">{props.command}</button>
    </>
  );
};

export default SpecialButton;