import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="buttons specialButton"
      onClick={()=>props.setSpecialState(props.spe)}>
        {props.displaySpe}
      </button>
    </>
  );
};
export default SpecialButton;
