import React, {useState} from "react";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file
import { operators } from "../../../data";

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [count] = useState(operators);
  console.log(operators.value)
  return (
    <div>
      {count.map((current) => (
      <OperatorButton key = {current.char} symbol = {current.value}/>
      ))}
    </div>
  );
};

export default Operators
