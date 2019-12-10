import React from "react";

const NumberButton = props => {
  console.log(props);
  return (
    <button className="number-button">
      <span role="img" aria-label="heart">
        {props.button}
      </span>
    </button>
    //   {/* Display a button element rendering the data being passed down from the parent container on props */}
    // </>
  );
};

export default NumberButton;
