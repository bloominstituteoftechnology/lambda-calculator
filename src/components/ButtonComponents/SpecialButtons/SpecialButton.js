import React from "react";

 export const SpecialButton = (props) => {

   function handleClickEvent() {
    props.consoleLog(props.number)
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button
        onClick={() => props.setDisplayValue(props.special)}
        >
        {props.special}
      </button>}
    </>
  );
};
