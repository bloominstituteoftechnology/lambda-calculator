import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

export default function Numbers() {
  const [numbersButton] = useState(numbers)
  // STEP 2 - add the imported data to state
  // console.log("numbers button", useState(numbers));
  return (
    <div>
      <div className="numbersButton" />
      {numbersButton.map((n, index) => (
        <NumberButton key={index} numbers={n} />
      ))}
    </div>
  );
};
/* STEP 3 - Use .map() to iterate over your array data and return a button
    component matching the name on the provided file. Pass
    it any props needed by the child component*/
  // import React, { useState } from "react";
  // import { buttonValues } from "../../data";
  // import ColorButton from "./ColorButton";

  // export default function ColorPicker() {
  //   const [colorButton, setColorButton] = useState(buttonValues);
  //   // console.log("color button", useState(buttonValues));

  //   return (
  //     <div>
  //       <p>
  //         {/* Using template literal to add space after color 👇 */}
  //         {`Color: `}
  //         <span className="picker-choice">Yellow</span>
  //       </p>
  //       <div className="button_container" />
  //       {colorButton.map((button, index) => (
  //         <ColorButton key={index} button={button} />
  //       ))}
  //     </div>
  //   );
  // }
