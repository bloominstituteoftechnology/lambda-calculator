import React, {useState} from "react";
import data from "../../../data";
import {OperatorButton} from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  //destructure the data first


  const [opState] = useState(data.operators);
  console.log(opState);
  //const {things in the object} = props
  return (
    <div className="operators-container">
       {opState.map((oper,index) =>{
        return <OperatorButton oper={oper} index={index}/>

       })}

    </div>
  );
};

export default Operators;
