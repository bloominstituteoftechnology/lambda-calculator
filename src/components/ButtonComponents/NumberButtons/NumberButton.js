import React from "react";

const NumberButton = props => {
  return (
    <React.Fragment>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number !== "0" ? (
        <button>{props.number}</button>
      ) : (
        <button className="zero">{props.number}</button>
      )}
    </React.Fragment>
  );
};

export default NumberButton;
