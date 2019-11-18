import React, { useState } from "react";

// import components
import OperatorButton from "./OperatorButton"

// import array data from data.js file 
import { operators } from "../../../data"

const Operators = () => {
    // add the imported data to state
    const [operatorState, setOperatorState] = useState(operators);

    return (
        <div className = "operators"> {
            operatorState.map((operator, index) => {
                return <OperatorButton key = { index } operator = { operator } />
            })
        }
        </div>
    );
};

export default Operators;