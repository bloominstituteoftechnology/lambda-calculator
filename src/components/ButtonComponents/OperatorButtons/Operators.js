import React from "react";

//import any components needed

//Import your array data to from the provided data file
import { operators } from "../../../data";

const Operators = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {operators.map(operators => {
        return <button className="operator-btns"> {operators.char} </button>;
      })}
    </div>
  );
};

export default Operators;
