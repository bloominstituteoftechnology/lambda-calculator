import React from "react";

const SpecialButton = (props) => {
  return (
    <>
    {/* Display a button element rendering the data being passed down from the parent container on props */}
    <button className='button specialButton' onClick={() => props.handlerSpecial(props.special)}>
      {props.special}
      </button>
    </>
  );
};
export default SpecialButton;
