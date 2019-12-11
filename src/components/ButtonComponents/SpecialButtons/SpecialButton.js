import React from "react";

const SpecialButton = (props) => {
  return (
    <button onClick = {() => props.addSpecial(props.value)}>
      {props.text}
    </button>
  );
};

export default SpecialButton;