import React from "react";


const SpecialButton = (special) => {
  return (
    <button className="button special" key={special}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {special}
    </button>
  );
};

export default SpecialButton;