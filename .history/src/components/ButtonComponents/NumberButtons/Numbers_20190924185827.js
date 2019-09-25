import React, { useState} from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

export default function Numbers(props) {
  // STEP 2 - add the imported data to state
  const [numberValue, setNumberValue] = useState(numbers);
  return (
    <div>
      {numberValue.map((num, index) => (
        <NumberButton setValue= { props.setValue } key={ index } num={ num } />
      ))}
    </div>
  );
};
