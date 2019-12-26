import React, { useState } from "react";
import {numbers} from '../../data'
import {specials} from '../../data';
import {operators} from '../../data';
import NumberButton from '../ButtonComponents/NumberButtons/NumberButton';
const Display = (props) => {
  const [n] = useState(numbers);
  const [oper] = useState(operators);
  const [sp] =useState(specials);
  console.log(oper)
  return <div className="display">
    {props.zero}
   
    </div>;
};

export default Display;