import React, {useState} from "react";
import {operators} from "../../../data";


const OperatorButton = () => {
  const {oper, saveOper} = useState(operators);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    <div>
      <button onClick = {() =>saveOper(oper)} >{oper}</button>
    </div>
    </>
  );
};

export default OperatorButton;
