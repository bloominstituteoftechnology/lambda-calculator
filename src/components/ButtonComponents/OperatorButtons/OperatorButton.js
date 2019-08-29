import React from "react";

const OperatorButton = (props) => {
  const buttonStyle = {
    padding: '13px',
    color: 'white',
    backgroundColor: '#3DB5E5',
    borderRadius: '40px',
    border: 'black'
}

  return (
    <button style={buttonStyle}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      { props.operator.char }
    </button>
  );
};

export default OperatorButton;
