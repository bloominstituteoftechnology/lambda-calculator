import React from "react";

const OperatorButton = (props) => {
  
  const handleClick = () => {
    if (props.button === '=') {
      props.equal();
    } else {
      props.test(props.button);
    }
  }
  
  return (
    <button onClick={() => handleClick()}>{props.button}</button>

    /* Display a button element rendering the data being passed down from the parent container on props */
  );
};

export default OperatorButton;