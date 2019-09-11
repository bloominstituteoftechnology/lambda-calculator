import React,{useState} from "react";
import { operators } from '../../../data'
import OperatorButton from "./OperatorButton"


//import any components needed

//Import your array data to from the provided data file

const Operators = props => {
  // STEP 2 - add the imported data to state

  const [operatorList, setOperatorList] = useState(operators)

  return (
    <div>
       {
         operators.map(symbol => (
         <OperatorButton symbol={symbol} key={symbol.char} input={props.input} />
         ))
       }
    </div>
  );
};

export default Operators