import React, { useState } from "react"; // Imported `useState`
import SpecialButton from './SpecialButton'; // Importing default export of the {SpecialButton} component
import { specials } from '../../../data'; // Importing named export of the {specials} component

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsState] = useState(specials);

  const style_Specials = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '300px',
    height: '100px',
    order: '1',
  }

  return (
    <div style={style_Specials}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
        component matching the name on the provided file. Pass
        it any props needed by the child component*/}
      {specialsState.map(special => {
        return <SpecialButton special={special} />
      })}
    </div>
  );
};

// Exporting the {Specials} component using the `export` keyword
export default Specials;