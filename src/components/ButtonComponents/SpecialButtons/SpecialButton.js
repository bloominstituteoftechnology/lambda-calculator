import React from "react";


const SpecialButton = (special, props) => {
  function onClick() {
    if (special === 'C') {
      props.setNumber("0");
    } else if (special === '%') {
      const newDisplay = props.number + " " + special + " ";
      props.setNumber(newDisplay);
    }
  }

  return (
    <button className="button special" key={special} onClick={onClick}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {special}
    </button>
  );
};

export default SpecialButton;