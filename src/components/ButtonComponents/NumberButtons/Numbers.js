import React, { useState } from "react"; // Imported `useState`
import NumberButton from './NumberButton'; // Importing default export of the {NumberButton} component
import { numbers } from '../../../data'; // Importing named export of the {numbers} component

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbersState] = useState(numbers);
  const style_Numbers = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '300px',
    justifyContent: 'space-around',
    height: '400px',
    order: '3',
  }

  return (
    <div style={style_Numbers}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
        component matching the name on the provided file. Pass
        it any props needed by the child component*/}
      {numbersState.map(number => {
        return <NumberButton number={number} />
      })}
    </div>
  );
};

// Exporting the {Numbers} component using the `export` keyword
export default Numbers;