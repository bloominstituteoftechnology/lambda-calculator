import React from "react";


const NumberButton = (props) => {
  console.log(props);
  return (
    <>
      <button className = {props.numberProp == 0 ? "number_button zero" : "number_button"}
      // className="number_button"
      //onClick={() => props.setNumberState(props.numberState)}      
      >
      {props.numberProp} 
     </button>      
    </>
  );
};

export default NumberButton;
