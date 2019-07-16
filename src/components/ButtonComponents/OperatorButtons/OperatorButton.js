import React from "react";

const OperatorButton = (char, value, props) => {
  function onClick() {
    if (char === '=') {
      const currentExpression = props.number;
      const output = eval(currentExpression).toString();
      props.setNumber(output);
    } else {
      const newDisplay = props.number + " " + value + " ";
      props.setNumber(newDisplay);
    }
  }

  return (
    <button className="button operator" key={char} onClick={onClick}>{char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;