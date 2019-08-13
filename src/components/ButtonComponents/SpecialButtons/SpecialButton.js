import React from "react";

const SpecialButton = (props) => {
  const { buttonContent } = props
  return (
    <button className="specButton">{buttonContent}</button>
  );
};
export default SpecialButton;