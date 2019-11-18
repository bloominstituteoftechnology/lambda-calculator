import React, { useState } from "react";

// import component
import NumberButton from  "./NumberButton";

// import array data from data.js file
import { numbers } from "../../../data";

const Numbers = () => {
    // STEP 2 - add the imported data to state
  
    const [numberState, setNumberState] = useState(numbers);
  
    console.log(numberState);
    
    return (
      <div>
        {
          numberState.map((number, index) => {
            return <NumberButton key={index} number={number} />
          })
        }
      </div>
    );
  };
  
  export default Numbers;
  
  