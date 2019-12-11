import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="special-button">
      {/* Display a button element rendering the data being passed down from the parent container on props */
      
        props.sp
      
      }
    </button>
  );
};

export default SpecialButton;