import React, {useState} from "react";
import OperatorButton from './OperatorButton'

import { operators } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Operators = props => {
  // STEP 2 - add the imported data to state
  return operators.map(op => <OperatorButton operator={op} display={props.display} setDisplay={props.setDisplay} />)
}

export default Operators
