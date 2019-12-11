import React, {useState} from "react";
import {numbers} from "../../../data.js";
import NumberButton from "./NumberButton.js";

const Numbers = (props) => {
  const [numberButton, setNumberButton] = useState(numbers);

  return (
    <div>
      {numberButton.map(number => {
          return <NumberButton textContent={number} />
      })}
    </div>
  ); 
};

export default Numbers;