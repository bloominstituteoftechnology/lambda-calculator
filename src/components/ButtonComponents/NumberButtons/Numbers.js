import React, {useState} from "react";
import {numbers} from "../../../data.js";
import NumberButton from "./NumberButton.js";

const Numbers = (props) => {
  const [numberButton, setNumberButton] = useState(numbers);

  return (
    <div>
      {numberButton.map(number => {
          return <NumberButton key={number} text={number} addNumber={props.addNumber} />
      })}
    </div>
  ); 
};

export default Numbers;