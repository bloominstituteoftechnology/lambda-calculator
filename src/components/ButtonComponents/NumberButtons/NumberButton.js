import React from "react";

const NumberButton = props => {
    return (
        <button className="number_button">
            {props.number}
            {/* Display a button element rendering the data being passed down from the parent container on props */}
        </button>
    );
};
export default NumberButton;
