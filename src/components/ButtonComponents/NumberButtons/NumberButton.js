import React from "react";

const NumberButton = (props) => {

  const buttonStyle = {
      padding: '13px',
      color: 'white',
      backgroundColor: '#113C78',
      borderRadius: '40px',
      border: 'black'
  }

  return (
    <button style={ buttonStyle } onClick={ () => props.addNumbers(props.currentNum)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      { props.currentNum }
    </button>
  );
};

export default NumberButton