import React, { useState } from 'react';
import { numbersData } from '../../../data';
import NumberButton from './NumberButton';

const Numbers = () => {
  const [numbers] = useState(numbersData);

  return (
    <div>
      {numbers.map(number => (
        <NumberButton number={number} />
      ))}
    </div>
  );
};

export default Numbers;
