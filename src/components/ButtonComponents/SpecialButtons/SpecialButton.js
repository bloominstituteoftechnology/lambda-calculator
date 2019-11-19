import React from "react";

const SpecialButton = props=> {
  return (
    <button className="special_button">
      {props.buttonTextSpecials}
    </button>
  );
};


export default SpecialButton;