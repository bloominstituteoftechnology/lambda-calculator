import React, { useState } from "react";
import { numbers } from '../../../data' 
import NumberButton from "./NumberButton.js"

const Numbers = (props) => {
  const numberState = useState(numbers)[0];
  return (
    <div className="numbers">
      {
        numberState.map((num, index) => {
          return <NumberButton value={num} key={num} label={num} func={props.func} onClick={() => {return props.func(num)}}/>
        })
      }
    </div>
  );
};

export default Numbers;
