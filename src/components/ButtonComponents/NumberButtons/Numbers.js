import React, {useState} from "react";

//import any components needed

import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);

  return (
    <div>
      {numberState.map((item => {
        return <NumberButton number={item} />
      }))}
    </div>
  );
};

export default Numbers;
