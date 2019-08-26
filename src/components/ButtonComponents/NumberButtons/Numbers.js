import React, {useState} from "react";

import NumberButton from './NumberButton.js'
import { numbers } from '../../../data'
// maybe --> import { component name } from '../../../data' 

//import any components needed
/* {STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component}*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div>
      {numberState.map((num/*our iterator*/, index/*provides key value to each instance*/ ) => <NumberButton key={index} numContent={num}/*info we want to sendout to other component & can be named whatever*/ value={num} /*actual value*/ />)}
    </div>
  );
};

export default Numbers;

/*in array, it just so happens that the value and the name is the same?
value is a real name, you're actualy providing a value. & in calculator, it returns abunch of "numbers". */
