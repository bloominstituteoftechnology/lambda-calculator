import React from "react";

const SpecialButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}

      <button className=" button_Specials">

      {/* <span role= 'special button' aria-label = 'special button'></span> */}
      {props.button}

</button>
    </>
  );
};

export default SpecialButton;
