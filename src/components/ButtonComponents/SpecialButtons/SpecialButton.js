import React from "react";

const SpecialButton = (props) => {
  //console.log(props)
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.specialBtn}
    </button>
  );
};

export default SpecialButton;