import React, { useState } from "react";
import Numbers from "../ButtonComponents/NumberButtons/Numbers";
// import Numbers from "./components/ButtonComponents/NumberButtons/Numbers.js";
// import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
// import Specials from "./components/ButtonComponents/SpecialButtons/Specials";

const Display = props => {
  return <div className="display">{props.value}</div>;
};

export default Display;
