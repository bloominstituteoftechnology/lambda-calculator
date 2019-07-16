import React from "react";

const SpecialButton = (props) => {
  return (
    <div class="special-buttons-container">
      <button className="special-buttons">{props.specialsMapped}</button>
    </div>
  );
};

export default SpecialButton;
