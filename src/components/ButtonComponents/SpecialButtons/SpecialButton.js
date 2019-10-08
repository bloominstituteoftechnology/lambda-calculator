import React from "react";

const SpecialButton = (props) => {
  return (
    <button  onClick={() => props.specials()}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      
      props.result}
    </button>
  );
};

export default SpecialButton;
