import React from "react";

const OperatorButton = (props) => {
    return (
        <button>{props.operator.char}</button>
    );
};

export default OperatorButton;