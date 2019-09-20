import React from "react";

const NumberButton = props => {
  const { setDisplay, display, number } = props;

  const addNumberToDisplay = number => {
    if (display === "0" && number !== ".") {
      return setDisplay(`${number}`);
    }

    if (display.includes(".") && number === ".") {
      return false;
    }

    return setDisplay(`${display}${number}`);
  };

  return (
    <React.Fragment>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {number !== "0" ? (
        <button
          onClick={() => {
            addNumberToDisplay(number);
          }}>
          {number}
        </button>
      ) : (
        <button
          onClick={() => {
            addNumberToDisplay(number);
          }}
          className="zero">
          {number}
        </button>
      )}
    </React.Fragment>
  );
};

export default NumberButton;
