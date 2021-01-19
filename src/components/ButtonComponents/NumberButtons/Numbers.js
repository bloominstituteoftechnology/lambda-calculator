import React, {useState} from "react";
import NumberButton from './NumberButton'
import { numbers } from "../../../data";



 const Numbers = (props) => {
  // STEP 2 - add the imported data to state

  
  const [numberList, setNumbersList] = useState(numbers)


  return (
    <div>

        {
          numbers.map(number => (
            <NumberButton key={number} input={props.input} number={number} />
          ))
        }
    </div>
  );
};
export default Numbers

