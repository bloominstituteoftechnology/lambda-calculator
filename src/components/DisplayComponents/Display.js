import React, {useState} from "react";
import {numbers, operators, specials} from "../../data";
// import Numbers from "../ButtonComponents/NumberButtons/Numbers";
// import Operators from "../ButtonComponents/OperatorButtons/Operators";
// import Specials from "../ButtonComponents/SpecialButtons/Specials";



const Display = () => {
  const [num,saveNum] = useState(numbers);
  const [ops, saveOps] = useState(operators);
  
  // , ops, spls } = , operators, specials});
  return( 
  <div className="display">
    <Numbers nums = {nums}/>
    <Operators ops = {ops}/>
    <Specials spls = {spls}/>
  </div>
  );
};

export default Display;
