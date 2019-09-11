import React from "react";

const NumberButton = ({ input, number}) => {


  
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="numberButton" key={number} onClick={() => input(number)}  >
        {number}
      </button>
    </>
  );
};

export default NumberButton;

