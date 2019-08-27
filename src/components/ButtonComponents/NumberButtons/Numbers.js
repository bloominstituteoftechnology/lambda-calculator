import React, {useState} from "react";
import NumberButton from './NumberButton.js'
//import any components needed

//Import your array data to from the provided data file
import { numbers } from '../../../../src/data.js'


const Numbers = (props) => {
  const [number, setNumber] = useState(numbers);
  console.log('Numbers',props)
  return (
    <div>
      {number.map(xNumb => {
      return <NumberButton key={xNumb} text={xNumb} addNumb = {props.addNumb}/>
    })}
    </div>
    
  );
};
console.log('hello')


export default Numbers;