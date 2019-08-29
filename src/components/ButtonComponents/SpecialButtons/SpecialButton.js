import React from "react";

const SpecialButton = (props) => {
  const buttonStyle = {
    padding: '13px',
    color: 'white',
    backgroundColor: '#2061B0',
    borderRadius: '40px',
    border: 'black'
}

  return (
    <button style={buttonStyle}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      { props.currentChar }
    </button>
  );
};

export default SpecialButton;