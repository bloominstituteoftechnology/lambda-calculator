import React from "react";
import { numbers } from "../../../data.js";


const NumberButton = (props) => {
  console.log(props);
  return (
    <button>
      {numbers.forEach((index) => {
        return index
      })}
    </button>
  );
};

export default NumberButton