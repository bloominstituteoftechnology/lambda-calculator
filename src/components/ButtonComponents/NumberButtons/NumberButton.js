import React from "react";
// import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";

const NumberButton = (props) => {
console.log(props.num);
  return (
    <button className = "numButton">
      {props.numContent}
    </button>
  );
};

export default NumberButton;
