import React, {useState} from "react";
import { numbers } from '../../../data';
import NumberButton from './NumberButton';

const Numbers = () => {

  const [number] = useState(numbers) 

  const displayNum =()=>{
      
  }
  console.log(displayNum)

  return (
    <div className="nums">
      {number.map((num) =>{
        return  <NumberButton key={num} numberButton={num}/>
      })}

    </div>
  );
};



export default Numbers