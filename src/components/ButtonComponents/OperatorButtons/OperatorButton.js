import React from "react";
import {operators} from "../../../data"

const OperatorButton = (props) => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.operator}</button>)
    </div>
  );
};

export default OperatorButton;