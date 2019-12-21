import React from "react";
import {operators} from "../../../data"
import Operators from "./Operators"

const OperatorButton = (props) => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <Operators data={operators}/>
    </button>
  );
};

export default OperatorButton;