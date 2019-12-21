import React from "react";
import { numbers } from "../../../data.js";
import Numbers from "./Numbers"


const NumberButton = (props) => {
  return (
    <div>
      <Numbers data={numbers}/>
    </div>
  );
};

export default NumberButton;