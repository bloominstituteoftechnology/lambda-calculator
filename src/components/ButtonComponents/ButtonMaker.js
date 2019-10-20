import React from "react";

function ButtonMaker(props) {
    // console.log(`ButtonMaker Log`, props)
  return (
    <>
      <button
        onClick={() => props.displayChanger(props.buttonLabel)}>
        {props.buttonLabel}
      </button>
    </>
  );
}

export default ButtonMaker;


// onClick={() => props.displayChanger(props.buttonLabel)}

// onClick={props.displayChanger ? 
//     props.displayChanger(props.buttonLabel):
//     console.log(false)}>