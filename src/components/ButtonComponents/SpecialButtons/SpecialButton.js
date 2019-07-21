import React from "react";

const SpecialButton = (props) => {
  return (
    <div>
      <button className="btn special-btn" onClick={ () => props.specialButtonClick( props.specialsMapped ) }>{props.specialsMapped}</button>
    </div>
  );
};

export default SpecialButton;
