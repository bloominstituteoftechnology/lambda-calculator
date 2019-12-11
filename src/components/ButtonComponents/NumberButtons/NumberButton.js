import React from "react";

const NumberButton = (props) => {
  return (
   
    <button className="button Number" onclick = { () => {
      props.set(props.total + props.button)
    }}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    {props.numberData}
    </button>
  );
};

export default NumberButton;
