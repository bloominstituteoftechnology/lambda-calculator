import React from "react";

const SpecialButton = (props) => {
  return (
    <button className={"button special-button"} value={props.value} aria-label={`${props.label} key`}>
      {props.label}
    </button>
  );
};

export default SpecialButton;
