import React, {useState} from "react";
import NumberButton from "./../ButtonComponents/NumberButtons/NumberButton.js";
import Operators from "./../ButtonComponents/OperatorButtons/Operators.js";
import Specials from "./../ButtonComponents/SpecialButtons/Specials.js";

/*
Need to find a way to pass the clicked data from these other files into this file and then once that's done,
have it interact in the proper way there.
*/

const Display = (props) => {
  const [displayState, setDisplayState] = useState(0);

  return (
    <div className="display">
      {displayState}
    </div>
  );
};
export default Display;
