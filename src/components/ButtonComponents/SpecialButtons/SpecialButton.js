import React from "react";

const SpecialButton = (props) => {
  return (
    <div>
      <button className="btn special-btn">{props.specialsMapped}</button>
    </div>
  );
};

export default SpecialButton;
