import React from "react";

const OperatorButton = ({symbol, input}) => {

 


  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operatorButton" key={symbol.char} onClick={() => input(symbol.char)}>
      {symbol.char}
      </button>
    </>
  );
};
export default OperatorButton;