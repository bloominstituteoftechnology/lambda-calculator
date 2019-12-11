import React from "react";

const OperatorButton = props => {
    return (
        <button className="operator_btn">
            {/* Display a button element rendering the data being passed down from the parent container on props */}
            {props.operator}
        </button>
    );
};

export default OperatorButton;
