import React from "react";

const NumberButton = ({number}) => {
  let numStyle;
  console.log(number)
  if (number == 0) {
    numStyle = {
      background: '#094377',
      width: '180px',
      borderRadius: '60px',
      color: 'white',

    }
  } else {
    numStyle = {
      background: '#0E447E',
      color: 'white',
    }
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button style={numStyle}>{number}</button>
    </>
  );
};


export default NumberButton;