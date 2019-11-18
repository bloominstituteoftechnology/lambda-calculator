import React, { useState } from "react";

// import component
import NumberButton from  "./NumberButton";

// import array data from data.js file
import { numbers } from "../../../data";

const Numbers = (props) => {
    // STEP 2 - add the imported data to state
  
    const [numberState, setNumberState] = useState(numbers);
  
    
    return (
      <div className = "numbers">
        {
          numberState.map((number, index) => {
            return <NumberButton key={index} number={number} setNum1={props.setNum1} setNum2={props.setNum2} nums={{ num1: props.nums.num1, num2: props.nums.num2 }} setCurrDisplay={props.setCurrDisplay} operation={props.operation}/>
          })
        }
      </div>
    );
  };
  
  export default Numbers;
  
  