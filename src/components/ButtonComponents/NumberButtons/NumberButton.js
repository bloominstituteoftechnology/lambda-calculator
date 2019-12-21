import React from "react";
import { numbers } from "../../../data.js";
import Numbers from "./Numbers"


const NumberButton = (props) => {
  console.log(props);
  return (
    <Numbers data={numbers}/>
  );
};

export default NumberButton