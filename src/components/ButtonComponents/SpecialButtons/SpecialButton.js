import React from "react";

import "./specialButton.scss"

const SpecialButton = (props) => {
    return (
    //    <button onClick={() => props.clearEverything()}>{props.special}</button>
          <button onClick={() => props.clearDisplay()}>{props.special}</button>
    );
};

export default SpecialButton;
