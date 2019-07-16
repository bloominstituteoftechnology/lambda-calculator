import React, { useState } from 'react';
import { numbers } from '../../../data';
import NumberButton from './NumberButton';

const Numbers = (props) => {
  const [ourNumbers, setNumbers] = useState(numbers);
  const numbersMapped = ourNumbers.map(elements => elements);
  // STEP 2 - add the imported data to state
  // const [numbers, setNumbers] = useState(numbers);


  //const numberButtons = numbers.map(element => {
  //  `<button>${element}</button>`
  //});


  
  return (
    <div>
      {ourNumbers.map(info => (
        <NumberButton key={info} numbersMapped={info} />
      ))}

    </div>
  );
};

export default Numbers;