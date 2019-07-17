import React from "react";

const SpecialButton = ({ special }) => { // Passing {special} as props
  const style_SpecialButton = {
    background: '#125C99',
    color: '#fff',
    border: 'none',
    borderRadius: '40px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.20)',
    cursor: 'pointer',
    outline: 'none',

  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='clicky' style={style_SpecialButton}>{special}</button>
    </>
  );
};

// Exporting the {SpecialButton} component using the `export` keyword
export default SpecialButton;
