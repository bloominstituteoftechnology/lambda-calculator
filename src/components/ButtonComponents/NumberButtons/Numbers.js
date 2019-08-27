import React, {useState} from "react";
import NumberButton from './NumberButton.js'
//import any components needed

//Import your array data to from the provided data file
import { numbers } from '../../../../src/data.js'


const Numbers = (props) => {
  const [number, setNumber] = useState(numbers);
  return (
    <div>
      {number.map(xNumb => {
      return <NumberButton key={xNumb} text={xNumb}/>;
    })}
    </div>
  );
};



export default Numbers;