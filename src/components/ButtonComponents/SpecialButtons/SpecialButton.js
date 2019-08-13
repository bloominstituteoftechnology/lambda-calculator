import React from "react";

const SpecialButton = ({ special }) => {
  const specialStyle = {
    background: '#0B5D9B',
    color: 'white',
    marginTop: '8px'
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button style={specialStyle}>{special}</button>
    </>
  );
};

export default SpecialButton;