import React, { useState } from "react";

// import components
import OperatorButton from "./OperatorButton"

// import array data from data.js file 
import { operators } from "../../../data"

const Operators = (props) => {
    // add the imported data to state
    const [operatorState, setOperatorState] = useState(operators);

    return (
        <div className = "operators"> {
            operatorState.map((operator, index) => {
                return <OperatorButton key={index} operator={operator} operation={props.operation} setOperation={props.setOperation} setCurrDisplay={props.setCurrDisplay} nums={{ num1: props.nums.num1, num2: props.nums.num2 }} />
            })
        }
        </div>
    );
};

export default Operators;