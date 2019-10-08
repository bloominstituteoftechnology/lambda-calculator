import React from "react";

const SpecialButton = (props) => {
  console.log(props)
  return (
    <button>
      {props.specials}
    </button>
  );
};

export default SpecialButton;

/* Display a button element rendering the data being passed down from the parent container on props */