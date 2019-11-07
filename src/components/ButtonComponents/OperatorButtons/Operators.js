import React,{useState}from "react";
import OperatorButton from "./OperatorButton";
import {operators} from "../../../data"
//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  const [operatorsObjects, setOperatorObjects] = useState(operators)
  // STEP 2 - add the imported data to state
  return (
    <div>
      {operatorsObjects.map((object,index)=>
        (<OperatorButton key={index} button={object} /> ))}
    </div>
  );
};

export default Operators;