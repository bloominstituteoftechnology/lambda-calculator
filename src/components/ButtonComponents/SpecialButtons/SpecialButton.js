import React from "react";

const SpecialButton = props => {
  const { char } = props;
  return <button className="specColors">{char}</button>;
};

export default SpecialButton;
