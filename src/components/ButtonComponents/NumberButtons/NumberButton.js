import React from "react";

const NumberButton = (props) => {
  console.log(props)
  return (
    <button>
    <span> 
       
      {props.button}
    </span>
      
    </button>
  );
};

export default NumberButton;
