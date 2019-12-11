import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button key={props.key}>{props.special}</button>
    </>
  );
};
export default SpecialButton;
